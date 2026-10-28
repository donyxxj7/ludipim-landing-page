# Configuração do Meta Pixel no checkout Cakto — pendente

Status em 27/10/2026: **nenhum Pixel ID, token CAPI ou evento real de compra foi confirmado.** Verificação direta no navegador: nenhum conjunto de dados adicionado ao portfólio Ludipim e Gerenciador de Eventos sem fonte conectada. Formulário “Ludipim — Conversões” preparado, mas não enviado porque exige aceite dos Termos das Ferramentas Comerciais da Meta. Conexão automática de todos os conjuntos à CAPI desmarcada no formulário.

Na Cakto, produto correto aberto em **Pixels e rastreamento**: campo Pixel ID vazio e envio pelo servidor não ativado. As opções `Purchase` para Pix e boleto gerados estavam marcadas. Foram **desmarcadas e salvas**; uma recarga confirmou que ambas permaneceram desligadas. Isso corrige a regra de contagem, mas não comprova recebimento de eventos.

## Privacidade: bloqueio de ativação

Na primeira consulta, a landing page informava que suporte e políticas oficiais seriam adicionados. Durante a auditoria, uma atualização já publicada passou a informar suporte e reembolso, além do total à vista de R$ 15,89. Não há política de privacidade aprovada nem mecanismo de consentimento publicitário implementado. Nenhum rastreamento novo foi ativado. Antes da instalação, completar identificação do responsável, canal real de contato, finalidades, compartilhamento com Meta/Cakto, direitos e retenção; implementar recusa e revogação tão acessíveis quanto a aceitação. Base legal e requisitos da operação devem ser revisados antes de habilitar cookies. Referência: Guia orientativo Cookies e proteção de dados pessoais da ANPD.

## Eventos previstos, ainda não validados

- `PageView`: carregamento da landing page após consentimento aplicável.
- `ViewContent`: visualização do produto após consentimento aplicável.
- `InitiateCheckout`: abertura efetiva do checkout pela integração oficial Cakto; evitar emissão simultânea do mesmo início no site e no checkout.
- `Purchase`: somente pagamento aprovado na Cakto. Não emitir na landing page.
- Se houver Pixel e CAPI para a mesma compra, confirmar mesmo `event_name` e `event_id`, conferir deduplicação no Gerenciador e comparar com um pedido aprovado. A alegação de deduplicação exibida pela Cakto não substitui um teste real.

**Nenhum dos quatro eventos foi marcado como aprovado; não houve compra, geração de Pix ou teste fictício.**

## Procedimento oficial para o produto Ludipim

1. No Gerenciador de Eventos da Meta, criar ou localizar um conjunto de dados e copiar o **Pixel ID numérico** do titular.
2. Na Cakto: Produtos → Meu Primeiro Inglês Divertido → Editar → Configurações Avançadas → Configurar Pixel → Facebook.
3. Informar o Pixel ID correto, selecionar domínio conforme plataforma e salvar o produto.
4. **Deixar DESATIVADA a opção de disparar `Purchase` na geração de Pix ou boleto não pago.** Um pedido pendente não é uma venda. Não usar percentuais de compra estimada para o primeiro teste de lucratividade.
5. Em Gerenciador de Eventos, Testar Eventos, abrir checkout e confirmar `InitiateCheckout`. Executar uma compra de teste autorizada e paga para conferir **um** `Purchase` com valor/moeda corretos.
6. Se habilitar CAPI e pixel do navegador simultaneamente, revisar deduplicação de eventos antes da campanha.
7. Rever privacidade e consentimento pertinentes **antes** de usar rastreamento e públicos personalizados.

## O que o site NÃO deve fazer
- Não disparar `Purchase` ao clicar em qualquer botão de compra.
- Não enviar dados de clientes do servidor/Netlify à Meta sem configuração e base legal adequadas.
- Não colocar tokens Meta ou Cakto no repositório nem em `NEXT_PUBLIC_*`.
- Não lançar uma campanha com otimização para compras sem poder medir um pagamento aprovado.

## Critério de aprovação
- [ ] Pixel ID confirmado na Meta
- [ ] Pixel vinculado ao produto correto no painel Cakto
- [ ] `InitiateCheckout` confirmado no checkout
- [ ] `Purchase` de transação realmente aprovada confirmado (e não duplicado)
- [ ] Consentimento/privacidade e relatório de eventos revisados
- [ ] Conta e orçamento Meta confirmados por usuário autorizado

Referências (Cakto):
- https://ajuda.cakto.com.br/pt-br/articles/56-como-configurar-o-pixel-do-facebook-na-cakto
- https://ajuda.cakto.com.br/pt-br/articles/124-guia-de-pixels-de-conversao-na-cakto-o-que-sao-e-como-funcionam
