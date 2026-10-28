import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

async function sourceModule(path) {
  const source = await readFile(new URL(path, import.meta.url), "utf8");
  const js = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.ES2020 } }).outputText;
  return import(`data:text/javascript;base64,${Buffer.from(js).toString("base64")}`);
}
const { canTrack, createMetaConsent, readConsent, serializeConsent, CONSENT_MAX_AGE_MS } = await sourceModule("../lib/meta-consent.ts");
const good = { enabled: true, privacyReady: true, pixelId: "1112474941151817" };
function fixture(config = good, pending) {
  const calls = [];
  let loads = 0;
  const controller = createMetaConsent(config, {
    load: () => { loads++; return pending || Promise.resolve(); },
    command: (...args) => calls.push(args),
    clearCookies: () => {},
  });
  return { controller, calls, loads: () => loads };
}

test("neither missing consent nor rejection loads a tracker", async () => {
  const f = fixture();
  await f.controller.apply(null);
  await f.controller.apply("rejected");
  assert.equal(f.loads(), 0);
  assert.deepEqual(f.calls, []);
});

test("each release gate and invalid ID block tracking even after acceptance", async () => {
  for (const config of [
    { ...good, enabled: false }, { ...good, privacyReady: false },
    { ...good, pixelId: "" }, { ...good, pixelId: "<script>" },
  ]) {
    assert.equal(canTrack(config), false);
    const f = fixture(config);
    await f.controller.apply("accepted");
    assert.equal(f.loads(), 0);
    assert.deepEqual(f.calls, []);
  }
});

test("accepted consent sends only PageView and ViewContent with verified product price", async () => {
  const f = fixture();
  await f.controller.apply("accepted");
  await f.controller.apply("accepted");
  const events = f.calls.filter(c => c[0] === "track");
  assert.deepEqual(events.map(c => c[1]), ["PageView", "ViewContent"]);
  assert.equal(events[1][2].value, 14.9);
  assert.equal(events[1][2].currency, "BRL");
  assert.equal(f.calls.filter(c => c[0] === "init").length, 1);
  assert.equal(f.calls.some(c => c.includes("Purchase") || c.includes("InitiateCheckout")), false);
});

test("withdrawal while the SDK is loading prevents all queued initialization/events", async () => {
  let finish;
  const pending = new Promise(resolve => { finish = resolve; });
  const f = fixture(good, pending);
  const accepted = f.controller.apply("accepted");
  f.controller.revoke();
  finish();
  await accepted;
  assert.deepEqual(f.calls, []);
});

test("overlapping activation (including React strict effects) sends each event once", async () => {
  let finish;
  const f = fixture(good, new Promise(resolve => { finish = resolve; }));
  const first = f.controller.apply("accepted");
  f.controller.revoke();
  const second = f.controller.apply("accepted");
  finish();
  await Promise.all([first, second]);
  assert.equal(f.calls.filter(c => c[0] === "track").length, 2);
});

test("withdrawal notifies Meta and clears accessible Meta cookies", async () => {
  let cleared = 0;
  const calls = [];
  const c = createMetaConsent(good, { load: async () => {}, command: (...a) => calls.push(a), clearCookies: () => cleared++ });
  await c.apply("accepted");
  await c.apply("rejected");
  assert.deepEqual(calls.at(-1), ["consent", "revoke"]);
  assert.equal(cleared, 1);
});

test("failed SDK download does not send events", async () => {
  const calls = [];
  const c = createMetaConsent(good, { load: async () => { throw new Error("blocked"); }, command: (...a) => calls.push(a), clearCookies: () => {} });
  await assert.rejects(c.apply("accepted"));
  assert.deepEqual(calls, []);
});

test("consent record is minimal, versioned and expires after 180 days", () => {
  const now = 1700000000000;
  const raw = serializeConsent("accepted", now);
  assert.deepEqual(Object.keys(JSON.parse(raw)).sort(), ["choice", "savedAt", "version"]);
  assert.equal(readConsent(raw, now + 1), "accepted");
  assert.equal(readConsent(serializeConsent("rejected", now), now), "rejected");
  for (const value of [null, "broken", "{}", '{"version":1,"choice":"accepted"}', JSON.stringify({version: 999, choice:"accepted", savedAt:now})]) assert.equal(readConsent(value, now), null);
  assert.equal(readConsent(raw, now + CONSENT_MAX_AGE_MS), null);
  assert.equal(readConsent(raw, now - 1), null);
});

test("browser adapter is inert until consent calls load, with a single async SDK request", async () => {
  const { createBrowserTransport } = await sourceModule("../lib/meta-browser.ts");
  const scripts = [];
  const cookieWrites = [];
  globalThis.window = { location: { hostname: "ludipim.netlify.app" } };
  globalThis.document = {
    createElement: () => ({}),
    head: { appendChild: script => scripts.push(script) },
    set cookie(value) { cookieWrites.push(value); },
  };
  try {
    const transport = createBrowserTransport();
    assert.equal(scripts.length, 0);
    assert.equal(window.fbq, undefined);
    const loading = transport.load();
    assert.equal(transport.load(), loading);
    assert.equal(scripts.length, 1);
    assert.equal(scripts[0].src, "https://connect.facebook.net/en_US/fbevents.js");
    assert.equal(scripts[0].async, true);
    assert.deepEqual(window.fbq.queue, []);
    scripts[0].onload();
    await loading;
    transport.clearCookies();
    assert.equal(cookieWrites.length, 4);
    assert.equal(cookieWrites.every(c => /^_fb[pc]=; Max-Age=0/.test(c)), true);
    assert.equal(cookieWrites.some(c => c.includes("cakto")), false);
  } finally {
    delete globalThis.window;
    delete globalThis.document;
  }
});
