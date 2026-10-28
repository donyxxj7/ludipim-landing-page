/* QA visual da URL pública: não toca em pagamento nem em dados de compradores. */
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("playwright");

const url = process.env.SITE_URL || "https://ludipim.netlify.app";
const checkout = "https://pay.cakto.com.br/3erzio8_1247724";
const viewports = [360, 390, 768, 1440];
const outputDir = path.join(process.cwd(), "qa-screenshots");
fs.mkdirSync(outputDir, { recursive: true });

(async () => {
  const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
  const failures = [];
  try {
    for (const width of viewports) {
      const page = await browser.newPage({ viewport: { width, height: 800 }, deviceScaleFactor: 1 });
      const pageErrors = [];
      page.on("pageerror", error => pageErrors.push(error.message));
      const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
      if (!response || response.status() !== 200) failures.push(`${width}px: página HTTP ${response?.status() ?? "sem resposta"}`);

      await page.locator("#material").scrollIntoViewIfNeeded();
      await page.waitForTimeout(700);
      await page.locator("#oferta").scrollIntoViewIfNeeded();
      await page.waitForTimeout(400);
      await page.locator("#inicio").scrollIntoViewIfNeeded();

      const metrics = await page.evaluate(() => ({
        viewport: window.innerWidth,
        scroll: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
        broken: Array.from(document.images).filter(img => img.complete && img.naturalWidth === 0).map(img => img.getAttribute("src")),
      }));
      if (metrics.scroll - metrics.viewport > 3) failures.push(`${width}px: rolagem horizontal de ${metrics.scroll-metrics.viewport}px`);
      if (metrics.broken.length) failures.push(`${width}px: imagens quebradas ${metrics.broken.join(", ")}`);

      const ctas = page.locator(`a[href="${checkout}"]`);
      const ctaCount = await ctas.count();
      if (ctaCount < 3) failures.push(`${width}px: apenas ${ctaCount} links de compra encontrados`);

      const firstFaq = page.locator(".faq-item button").first();
      await firstFaq.scrollIntoViewIfNeeded();
      const wasExpanded = await firstFaq.getAttribute("aria-expanded");
      await firstFaq.click();
      const afterExpanded = await firstFaq.getAttribute("aria-expanded");
      if (wasExpanded === afterExpanded) failures.push(`${width}px: FAQ não alternou`);

      if (width <= 390) {
        const menu = page.getByRole("button", { name: "Abrir menu" });
        if (await menu.count()) {
          await menu.click();
          const expanded = await page.locator(".menu-toggle").getAttribute("aria-expanded");
          if (expanded !== "true") failures.push(`${width}px: menu mobile não abriu`);
          await page.locator(".main-nav a[href='#beneficios']").click();
          const closed = await page.locator(".menu-toggle").getAttribute("aria-expanded");
          if (closed !== "false") failures.push(`${width}px: menu mobile não fechou ao navegar`);
        } else failures.push(`${width}px: botão do menu mobile não encontrado`);
      }

      await page.screenshot({ path: path.join(outputDir, `ludipim-${width}px.png`), fullPage: true, animations: "disabled" });
      if (pageErrors.length) failures.push(`${width}px: erros JS: ${pageErrors.join("; ")}`);
      console.log(`${width}px: HTTP ${response?.status()}, scroll ${metrics.scroll}/${metrics.viewport}, ${ctaCount} CTAs, ${metrics.broken.length} imagens quebradas`);
      await page.close();
    }
  } finally {
    await browser.close();
  }
  if (failures.length) {
    console.error("QA FALHOU:\n" + failures.map(s => "- " + s).join("\n"));
    process.exitCode = 1;
  } else {
    console.log("QA OK para 360, 390, 768 e 1440 px. Conferir screenshots anexadas ao workflow.");
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
