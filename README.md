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
- A capa oficial do produto e as imagens reais das páginas de atividade ainda precisam ser adicionadas em `public/images/`. A composição do caderno e os cartões da galeria são ilustrações CSS provisórias, identificadas no código e na interface; não representam páginas oficiais do PDF.
- O PDF comercial não deve ser adicionado ao repositório.

## Configuração

- O endereço do checkout fica centralizado na constante `CHECKOUT_URL` em `app/page.tsx`.
- Defina `NEXT_PUBLIC_SITE_URL` com o domínio oficial antes da publicação para ativar a URL base do Open Graph e preencher o sitemap/robots com o endereço correto.
- Pixel da Meta, analítica, e-mail de suporte e políticas oficiais não foram configurados por falta dos identificadores e dados reais.

## Estrutura

```text
app/
  globals.css     estilos responsivos e identidade visual
  layout.tsx      metadata, Open Graph e estrutura HTML
  page.tsx        landing page e interações de FAQ/menu
  robots.ts       regras para rastreadores
  sitemap.ts      sitemap básico
components/       reservado para componentes compartilhados adicionais
public/images/    logo e futuras artes oficiais
```
