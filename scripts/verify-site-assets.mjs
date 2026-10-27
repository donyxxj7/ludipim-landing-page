import { readFileSync, existsSync, statSync } from "node:fs";
import { strict as assert } from "node:assert";

const images = [
  "ludipim-logo.webp",
  "ludipim-produto-hero.webp",
  "ludipim-capa.webp",
  "ludipim-cores.webp",
  "ludipim-numeros.webp",
  "ludipim-animais.webp",
  "ludipim-decoracao-banner.webp",
];

for (const image of images) {
  const path = `public/images/${image}`;
  assert.ok(existsSync(path), `Imagem faltando: ${path}`);
  assert.ok(statSync(path).size > 100, `Imagem vazia: ${path}`);
  const header = readFileSync(path).subarray(0, 12);
  assert.equal(header.toString("ascii", 0, 4), "RIFF", `Não é RIFF: ${path}`);
  assert.equal(header.toString("ascii", 8, 12), "WEBP", `Não é WebP: ${path}`);
}

const source = readFileSync("app/page.tsx", "utf8");
assert.ok(
  source.includes("https://pay.cakto.com.br/3erzio8_1247724"),
  "Checkout esperado não encontrado em app/page.tsx"
);
const media = readFileSync("components/ProductMedia.tsx", "utf8");
for (const image of images.filter((name) => name !== "ludipim-logo.webp" && name !== "ludipim-decoracao-banner.webp")) {
  assert.ok(media.includes(`/images/${image}`), `Referência faltando: ${image}`);
}
console.log("OK: 7 arquivos WebP reais presentes, prévias referenciadas e checkout correto no código.");
