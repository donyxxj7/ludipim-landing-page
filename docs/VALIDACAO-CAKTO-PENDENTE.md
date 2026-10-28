# Ludipim — validação Cakto (não concluída)

Este procedimento não foi executado no painel de produtor. Sem acesso autorizado ao produto e a um pedido realmente aprovado, **nenhuma etapa de liberação de acesso pode ser marcada como aprovada**.

## Pré-condições
- Produto correto: **Meu Primeiro Inglês Divertido**, 40 páginas A4, preço anunciado R$ 14,90.
- Checkout esperado: https://pay.cakto.com.br/3erzio8_1247724.
- No painel Cakto, confirmar canal de entrega **Cakto Members**, conforme documentação: https://ajuda.cakto.com.br/pt-br/articles/129-como-funciona-a-area-de-membros-da-cakto-v3.
- Conferir se o **módulo**, a **aula Baixe seu material** e o anexo PDF final estão **publicados para compradores**. Materiais de produção e PDFs comerciais não devem ser enviados ao GitHub público.
- Confirmar identificação do produtor, contato de suporte e mecanismo de arrependimento/reembolso.

## Aceite: compra → acesso
1. Abrir a landing page e clicar em comprar. Conferir endereço do checkout e oferta real, com taxas e preço final.
2. Realizar transação autorizada (preferencialmente teste disponível na plataforma); **não simular compra com pedido pendente**.
3. Confirmar que o pagamento foi aprovado e o produto liberado ao **usuário correto**.
4. Confirmar recebimento do e-mail de acesso do comprador e login na área de membros.
5. Baixar o PDF final, verificar 40 páginas A4 e gabaritos. Registrar evidências **sem expor dados pessoais**.
6. Validar suporte, solicitação de arrependimento e fluxo de reembolso conforme legislação e regras da plataforma.
7. Confirmar no Gerenciador de Eventos da Meta que `Purchase` ocorre **somente no pagamento aprovado**, com o valor/moeda corretos. Um clique no botão nunca é uma compra.

## Resultado em 27/10/2026
- [x] Link de checkout presente no código e no HTML publicado.
- [x] Publicação da landing page Netlify/Next.js confirmada.
- [ ] Preço e checkout carregados no navegador de comprador.
- [ ] Canal de entrega e módulo/aula publicados no painel Cakto.
- [ ] Transação autorizada concluída.
- [ ] PDF entregue e baixado por comprador.
- [ ] Reembolso e atendimento confirmados.
- [ ] Evento de compra real confirmado no Meta.

Até a conclusão, **não liberar os anúncios pagos**.
