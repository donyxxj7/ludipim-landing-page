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
- As artes oficiais ficam em `public/images/`: `ludipim-produto-hero.webp`, `ludipim-capa.webp`, `ludipim-cores.webp`, `ludipim-numeros.webp`, `ludipim-animais.webp` e `ludipim-decoracao-banner.webp`. O pacote de arquivos é fornecido separadamente para importar no repositório. Até a inclusão desses WebP, a interface usa fallback honesto em vez de imagens quebradas. As três prévias foram extraídas do material real; não são ilustrações inventadas.
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
components/
  ProductMedia.tsx  composição de produto e galeria real, responsiva
  robots.ts       regras para rastreadores
  sitemap.ts      sitemap básico
components/       reservado para componentes compartilhados adicionais
public/images/    logo e futuras artes oficiais
```
