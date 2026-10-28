# Ludipim — Landing page

Landing page da marca Ludipim para apresentar o produto digital **Meu Primeiro Inglês Divertido**. Aplicação construída com Next.js App Router, React, TypeScript, Tailwind CSS e Lucide React.

## Executar localmente

Requisitos: Node.js 20+ e pnpm 9+.

```bash
pnpm install
pnpm dev
```

Acesse `http://localhost:3000`.

## Verificações

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Imagens

- `public/images/ludipim-logo.webp`: logo oficial fornecida, otimizada para web.
- As artes oficiais ficam em `public/images/`: `ludipim-produto-hero.webp`, `ludipim-capa.webp`, `ludipim-cores.webp`, `ludipim-numeros.webp`, `ludipim-animais.webp` e `ludipim-decoracao-banner.webp`. Todas as artes estão presentes no repositório e são verificadas automaticamente no CI. Se algum arquivo estiver indisponível em um ambiente futuro, a interface tem fallback identificável. As três prévias foram extraídas do material real; não são ilustrações inventadas.
- O PDF comercial não deve ser adicionado ao repositório.

## Configuração

- O endereço do checkout fica centralizado na constante `CHECKOUT_URL` em `app/page.tsx`.
- Defina `NEXT_PUBLIC_SITE_URL` com o domínio oficial antes da publicação para ativar a URL base do Open Graph e preencher o sitemap/robots com o endereço correto.
- Meta Pixel, validação de entrega ao comprador, identificação legal do vendedor e canal de suporte permanecem pendentes. Veja os procedimentos e minutas em `docs/`; não assumir que estão aprovados.

## Estrutura

```text
app/
  globals.css     estilos responsivos e identidade visual
  layout.tsx      metadata, Open Graph e estrutura HTML
  page.tsx        landing page e interações de FAQ/menu
components/
  ProductMedia.tsx  composição de produto e galeria real, responsiva
  robots.ts       regras para rastreadores
  sitemap.ts      sitemap básico
public/images/    logo e futuras artes oficiais
```

## Produção e pré-lançamento

- Hospedagem comercial atual: https://ludipim.netlify.app (Netlify, com deploy automático da `main`).
- Configuração: `netlify.toml` e `NEXT_PUBLIC_SITE_URL` do ambiente de produção.
- Checklist: `docs/CHECKLIST-LANCAMENTO.md` e Issue #3.
- QA em navegador: workflow `QA visual Netlify` (360, 390, 768 e 1440 px, screenshots no GitHub Actions).
- Teste de entrega: `docs/VALIDACAO-CAKTO-PENDENTE.md`.
- Meta Ads: `docs/PIXEL-META-CAKTO.md` e `docs/PLANO-TESTE-ADS-R100.md`.
- Minutas de políticas: `docs/MINUTAS-ATENDIMENTO-E-POLITICAS.md`. Não são termos publicados sem aprovação.
