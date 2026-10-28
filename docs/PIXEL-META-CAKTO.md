# Configuração do Meta Pixel no checkout Cakto — pendente

Status em 27/10/2026: **nenhum Pixel ID, token CAPI ou evento real de compra foi confirmado.** O ChatGPT Ads Manager consta como instalado, mas suas ações da conta de anúncios não foram expostas nesta conversa; não inferir identificador ou autorização financeira.

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
