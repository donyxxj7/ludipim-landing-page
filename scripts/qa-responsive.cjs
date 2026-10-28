/* QA da aplicação: usa apenas páginas públicas; nunca envia formulário de pagamento. */
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("playwright");

const url = process.env.SITE_URL || "https://ludipim.netlify.app";
const checkout = "https://pay.cakto.com.br/3erzio8_1247724";
const viewports = [360, 390, 768, 1440];
const outputDir = path.join(process.cwd(), process.env.QA_SCREENSHOT_DIR || "qa-screenshots");
const legalRoutes = [
  ["/politica-de-privacidade", "Política de Privacidade"],
  ["/termos-de-compra", "Termos de Compra e Uso"],
  ["/politica-de-reembolso", "Política de Reembolso"],
  ["/informacoes-do-fornecedor", "Identificação do Fornecedor"],
];
fs.mkdirSync(outputDir, { recursive: true });

(async () => {
  const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
  const failures = [];
  try {
    for (const width of viewports) {
      const page = await browser.newPage({ viewport: { width, height: 800 }, deviceScaleFactor: 1 });
      const pageErrors = [];
      const metaRequests = [];
      page.on("request", request => { if (/https?:\/\/(?:[^/]+\.)?(?:facebook\.com|facebook\.net)\//i.test(request.url())) metaRequests.push(request.url()); });
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

      for (const [route] of legalRoutes) {
        if (await page.locator(`footer a[href="${route}"]`).count() !== 1) failures.push(`${width}px: link jurídico ausente ou duplicado ${route}`);
      }
      if (!(await page.locator('footer a[href^="mailto:"]').count())) failures.push(`${width}px: contato de suporte ausente`);
      if (!(await page.locator('footer a[href="https://reembolso.cakto.com.br/"]').count())) failures.push(`${width}px: portal de reembolso ausente`);
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
      if (metaRequests.length) failures.push(`${width}px: houve solicitação Meta com marketing desativado`);
      if (pageErrors.length) failures.push(`${width}px: erros JS: ${pageErrors.join("; ")}`);
      console.log(`${width}px: HTTP ${response?.status()}, scroll ${metrics.scroll}/${metrics.viewport}, ${ctaCount} CTAs, ${metrics.broken.length} imagens quebradas`);
      await page.close();
    }
    // Mobile and desktop for all legal/support pages, not only the landing page.
    for (const width of [390, 1440]) {
      for (const [route, title] of legalRoutes) {
        const page = await browser.newPage({ viewport: { width, height: 800 } });
        const response = await page.goto(new URL(route, url).href, { waitUntil: "networkidle", timeout: 60000 });
        if (response?.status() !== 200) failures.push(`${width}px ${route}: HTTP ${response?.status()}`);
        if (await page.getByRole("heading", { level: 1, name: title, exact: true }).count() !== 1) failures.push(`${width}px ${route}: título incorreto`);
        const overflow = await page.evaluate(() => Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) - window.innerWidth);
        if (overflow > 3) failures.push(`${width}px ${route}: overflow ${overflow}px`);
        if (!(await page.locator('a[href^="mailto:"]').count())) failures.push(`${width}px ${route}: suporte ausente`);
        if (route === "/informacoes-do-fornecedor" && !(await page.getByText("Identificação legal em validação:", { exact: false }).count())) failures.push(`${width}px: identidade não deve ser publicada neste QA`);
        await page.screenshot({ path: path.join(outputDir, `${route.slice(1)}-${width}px.png`), fullPage: true, animations: "disabled" });
        console.log(`${width}px ${route}: HTTP ${response?.status()}, overflow ${overflow}px`);
        await page.close();
      }
    }
    const robots = await browser.newContext();
    try {
      const response = await robots.request.get(new URL("/sitemap.xml", url).href);
      const xml = await response.text();
      if (response.status() !== 200 || legalRoutes.some(([route]) => !xml.includes(route))) failures.push("Sitemap não contém todas as rotas jurídicas");
    } finally { await robots.close(); }
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
