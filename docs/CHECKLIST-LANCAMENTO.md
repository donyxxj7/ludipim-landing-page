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
- [ ] **Preço real**: Work observou R$ 14,90 do produto + R$ 0,99 taxa = R$ 15,89 à vista; landing page atualizada no PR #7. **Pendente** reconfirmar o checkout depois de qualquer mudança de taxa, condições de pagamento e parcelamento.
- [ ] **Atendimento e identificação**: contato de suporte informado pelo responsável e publicado na landing page (endonyparadela2007@gmail.com). **Pendente** confirmar recebimento de e-mails, informar identificação legal e demais dados de contato exigidos; não publicar CPF/endereço particular sem avaliar necessidade e exposição.
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


## Páginas jurídicas (revisão de 27/10/2026)

- [x] Preparados textos públicos de Política de Privacidade, Termos de Compra e Uso e Política de Reembolso com acesso por links no rodapé e sitemap.
- [x] E-mail de contato confirmado pelo responsável: `endonyparadela2007@gmail.com`.
- [ ] Verificar identificação legal do fornecedor, inscrição fiscal aplicável e endereço físico e eletrônico exigidos para transparência no comércio eletrônico, sem presumir CNPJ ou divulgar documentos pessoais sem decisão explícita. **Página `/informacoes-do-fornecedor` preparada, mas cadastro real ainda não publicado.** Roteiro em `docs/IDENTIFICACAO-JURIDICA-FORNECEDOR.md`.
- [x] **Licença de uso definida e aprovada pelo responsável da Ludipim** (confirmação de 27/10/2026). Os Termos de Compra atualmente permitem uso pessoal/familiar e impressão para atividades pedagógicas da própria turma do comprador; proíbem revenda e redistribuição. **Essa confirmação não substitui revisão jurídica das políticas.**
- [ ] Confirmar prazo e funcionamento real da entrega Cakto Members, preço/taxa final e recebimento de mensagens de suporte. No atendimento, confirmar recebimento de demandas imediatamente e responder em até cinco dias, conforme Decreto 7.962/2013, art. 4º.
- [ ] Se Work instalar Meta Pixel, CAPI, cookies de publicidade ou formulário de leads, atualizar a Política de Privacidade e implantar os mecanismos de conformidade antes de iniciar coleta ou tráfego pago.
- [ ] Fazer revisão jurídica final antes de considerar os documentos oficiais e completos.

**Captação de leads:** a landing page atual não possui formulário de cadastro ou newsletter; visitantes não compradores não entram automaticamente numa lista de marketing. O checkout da Cakto coleta dados no ambiente externo, sujeito às permissões do painel e regras de privacidade.
