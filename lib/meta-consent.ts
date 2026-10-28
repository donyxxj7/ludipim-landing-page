/** No browser globals: this controller is also exercised with a fake transport. */
export const CONSENT_KEY = "ludipim.marketing-consent.v1";
export const CONSENT_VERSION = 1;
export const CONSENT_MAX_AGE_MS = 180 * 24 * 60 * 60 * 1000;

export type ConsentChoice = "accepted" | "rejected";
export type MetaConfig = { enabled: boolean; privacyReady: boolean; pixelId: string };
export type MetaTransport = {
  load: () => Promise<void>;
  command: (...args: unknown[]) => void;
  clearCookies: () => void;
};

export function canTrack(config: MetaConfig): boolean {
  return config.enabled && config.privacyReady && /^\d{10,20}$/.test(config.pixelId);
}

export function readConsent(raw: string | null, now = Date.now()): ConsentChoice | null {
  if (!raw) return null;
  try {
    const record = JSON.parse(raw);
    if (record.version !== CONSENT_VERSION || !Number.isFinite(record.savedAt)) return null;
    const age = now - record.savedAt;
    if (age < 0 || age >= CONSENT_MAX_AGE_MS) return null;
    return record.choice === "accepted" || record.choice === "rejected" ? record.choice : null;
  } catch {
    return null;
  }
}

export function serializeConsent(choice: ConsentChoice, now = Date.now()): string {
  return JSON.stringify({ version: CONSENT_VERSION, choice, savedAt: now });
}

export function createMetaConsent(config: MetaConfig, transport: MetaTransport) {
  let accepted = false;
  let generation = 0;
  let initialized = false;
  let tracked = false;

  function revoke() {
    accepted = false;
    generation += 1;
    if (initialized) transport.command("consent", "revoke");
    transport.clearCookies();
  }

  async function apply(choice: ConsentChoice | null): Promise<void> {
    if (!canTrack(config) || choice !== "accepted") {
      revoke();
      return;
    }
    accepted = true;
    const current = ++generation;
    // Do not even download Meta's SDK before a valid choice and both release gates.
    await transport.load();
    // Consent may have been withdrawn while the external script was loading.
    if (!accepted || current !== generation) return;
    if (!initialized) {
      transport.command("consent", "revoke");
      transport.command("init", config.pixelId);
      initialized = true;
    }
    transport.command("consent", "grant");
    if (!tracked) {
      tracked = true;
      transport.command("track", "PageView");
      transport.command("track", "ViewContent", {
        content_name: "Meu Primeiro Inglês Divertido",
        content_ids: ["meu-primeiro-ingles-divertido"],
        content_type: "product",
        value: 14.9,
        currency: "BRL",
      });
    }
  }

  return { apply, revoke };
}
