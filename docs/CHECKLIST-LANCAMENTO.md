# Ludipim — checklist de lançamento e tráfego pago

Atualizado em 27/10/2026. **Estado atual: NÃO LIBERADO para compra de tráfego.**
Esta lista separa fatos verificados tecnicamente de pontos que dependem de teste humano ou acesso à Cakto/Meta.

## Confirmado

- [x] O PR #1 foi mesclado à `main`.
- [x] Sete imagens WebP oficiais estão em `public/images/`: logo, mockup, capa, cores, números, animais e decoração.
- [x] Os componentes da landing page usam a capa e as páginas oficiais.
- [x] Link de checkout configurado no código: `https://pay.cakto.com.br/3erzio8_1247724`.
- [x] Página publicada na Netlify em `https://ludipim.netlify.app`, deploy de produção `ready` na `main` (`6870717`). Registros recentes apontam HTTP 200 e processamento de imagens sem erros.
- [x] URL canônica `NEXT_PUBLIC_SITE_URL=https://ludipim.netlify.app` cadastrada no ambiente de produção da Netlify antes do deploy.
- [x] Existe relatório de QA do material com 40 páginas A4, gabaritos e PDF digital otimizado. **Isso não prova a entrega pós-compra.**

## Bloqueios antes dos anúncios

- [ ] **Entrega**: verificar no painel Cakto que o produto está apto à venda, que o módulo e a aula estão publicados para compradores e que o PDF correto é entregue após confirmação do pagamento. Realizar compra de teste aprovada pelo responsável, com procedimento de estorno/reembolso quando aplicável, e registrar evidências sem compartilhar dados pessoais.
- [ ] **Preço real**: abrir o checkout e confirmar que o preço final anunciado de R$ 14,90 e as condições de pagamento coincidem; conferir taxas, parcelamento e eventuais acréscimos exibidos ao comprador.
- [ ] **Atendimento e identificação**: definir e publicar canal de suporte que funcione; identificar o fornecedor conforme legislação aplicável, usando dados reais e decisão explícita sobre privacidade. Não publicar CPF/endereço particular sem avaliar a necessidade e a exposição.
- [ ] **Reembolso, privacidade e termos**: preparar informação clara sobre conteúdo digital, entrega, licenças, privacidade e exercício do direito de arrependimento; obter revisão adequada. Não inventar garantia, prazo ou condição.
- [x] **Hospedagem comercial**: migração para Netlify Free realizada; acesso público e HTTPS confirmados nos registros. Monitorar limites de consumo da hospedagem.
- [ ] **Análises**: configurar a conta de anúncios e uma mensuração confiável de compras (integração Meta Pixel/CAPI no destino adequado) e validar ao menos um evento de compra de teste. Não instalar IDs de pixel sem permissão/aviso adequado.
- [ ] **Mobile**: revisar visualmente no navegador em 360, 390, 768 e 1440 px. Confirmar imagens sem corte, nenhum overflow horizontal, menu e FAQ operáveis, botões visíveis, preços consistentes.
- [ ] **Links**: conferir se o clique no botão de compra abre um checkout realmente funcional e não uma página indisponível/bloqueada.

## Critérios de aprovação

- Um teste completo demonstra: página → checkout correto → confirmação de pagamento → acesso ao PDF correto.
- Público consegue identificar o responsável e usar suporte/reembolso.
- Ambiente de hospedagem permite exploração comercial e HTTPS funciona.
- Meta Ads configurado com medição mínima para conhecer vendas geradas pelos anúncios.
- Revisão de mobile e testes automáticos concluídos.

## Links de referência

- Site: https://ludipim.netlify.app
- Checkout configurado: https://pay.cakto.com.br/3erzio8_1247724
- Lei brasileira para comércio eletrônico: https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/decreto/d7962.htm
- Netlify: https://app.netlify.com/projects/ludipim
- Exclusão da hospedagem anterior: depende de confirmação manual na Vercel; não foi executada pelo conector.

> Não subir PDFs comerciais, senhas, tokens, CPF ou dados dos clientes neste repositório público.
