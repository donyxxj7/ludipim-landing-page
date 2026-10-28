# Ludipim — validação da primeira venda

Revisão: 28/10/2026. **Roteiro preparado, compra e entrega real NÃO executadas.** Acompanhar o estado oficial na [Issue #3](https://github.com/donyxxj7/ludipim-landing-page/issues/3). Nenhum pagamento, reembolso ou evento de compra foi simulado.

## 1. Obter o procedimento de teste permitido pela Cakto

Os [Termos de Uso da Cakto](https://www.cakto.com.br/termos-de-uso), cláusula 11.1.5, restringem a autocompra pelo próprio link nas condições descritas. **Antes de o produtor pagar seu próprio produto, pedir à Cakto o procedimento oficial autorizado para validar pagamento e entrega.** Não recomendar contornar a regra usando outro IP, rede, conta ou cartão de terceiro.

Pergunta que o titular pode encaminhar ao suporte oficial:

> Sou produtor pessoa física e preciso validar a entrega de um produto digital na Cakto Members V3. Qual procedimento de teste vocês autorizam, considerando a cláusula 11.1.5? Existe ambiente ou transação de teste que valide aprovação, e-mail e acesso de comprador? Caso seja necessário pagamento real, quais condições e autorizações devem ser seguidas? Não quero gerar autocompra proibida ou venda fictícia.

Guardar a resposta privadamente. Um teste em sandbox ou prévia administrativa não comprova entrega de uma compra real de produção: registrar exatamente o que cada método permite verificar. Se não houver método permitido disponível, manter o teste bloqueado.

## 2. Conferências antes de qualquer pagamento

- Abrir https://ludipim.netlify.app no celular. Conferir os links de termos, privacidade, reembolso e fornecedor; a identificação do fornecedor ainda precisa de solução válida e autorização de publicação.
- Usar o botão de compra e confirmar destino https://pay.cakto.com.br/3erzio8_1247724 e produto **Meu Primeiro Inglês Divertido**.
- Conferir o preço final e as condições da forma de pagamento escolhida. A última auditoria autenticada (27/10) observou R$ 14,90 + R$ 0,99 = **R$ 15,89 à vista** e cartão inicialmente em **2 × R$ 8,62**. São referências históricas, não promessa de preço atual. Se houver divergência com a landing page, reconciliar antes de divulgar a oferta. Não alterar taxas ou cobrança sem decisão específica do titular.
- Confirmar no painel produto ativo, Cakto Members V3 associada, módulo/aula publicados e anexo correto. A prévia do produtor não substitui acesso de comprador.
- Confirmar que o cadastro/recibo do vendedor e o suporte correspondem à operação real, sem publicar dados pessoais neste repositório.
- **Manter Pixel/CAPI desligados** enquanto não houver comprovação de consentimento e demais requisitos. Vendas orgânicas não exigem habilitar rastreamento publicitário.

Se faltar autorização, houver valor inesperado ou requisito de identificação não resolvido, interromper a etapa dependente e registrar o bloqueio.

## 3. Pagamento — somente pelo titular, em procedimento autorizado

O assistente não realiza a transação. Depois da orientação oficial da Cakto e de autorização específica para o valor, seguir apenas o método permitido. Não usar dados inventados, cartões de terceiros ou contornos às regras da plataforma.

1. Registrar privadamente data, dispositivo, meio de pagamento e total efetivo.
2. Se houver Pix, **gerar o código não é pagamento aprovado**. Não disparar `Purchase` por isso. Aguardar a confirmação real no painel.
3. Conferir que o pedido correto consta como pago/aprovado, sem confundir pendente, gerado ou em análise.
4. Não solicitar reembolso automaticamente. Validar a existência do canal e as instruções; reembolso real requer autorização específica.

## 4. Entrega no papel de comprador

1. Conferir recebimento da mensagem de confirmação e de acesso, inclusive spam. Registrar atraso/ausência.
2. Entrar pela orientação da plataforma usando o e-mail da compra, em sessão de comprador, sem privilégios administrativos. Referência oficial: [Como acessar o produto que comprei](https://ajuda.cakto.com.br/pt-br/articles/49-como-acessar-o-produto-que-comprei).
3. Localizar o produto e a aula **Baixe seu PDF — 40 páginas**, liberada após aprovação.
4. Baixar e abrir o anexo. Conferir **40 páginas no total**, incluindo capa, atividades, guia, gabaritos e certificado; legibilidade, ausência de páginas vazias/corrompidas e formato A4. Não publicar o PDF pago em evidências públicas.
5. Testar a abertura no celular e, se possível, em um leitor de PDF no computador. Registrar somente os dispositivos realmente testados.

Somente marcar entrega concluída quando o comprador tiver obtido e aberto o arquivo correto após aprovação efetiva. Aula publicada/anexo no painel não bastam.

## 5. Suporte e arrependimento

- O titular deve enviar uma mensagem de teste de outro endereço para o suporte publicado, confirmar chegada, responder e conferir recebimento da resposta. O assistente não enviou mensagens.
- Definir quem monitora a caixa, como confirma imediatamente a recepção de demandas e como responde em até cinco dias. Se ainda não existir protocolo automático, usar atendimento manual e registrar o limite.
- Abrir o portal https://reembolso.cakto.com.br/ e verificar as instruções aplicáveis. A existência de um link não comprova o reconhecimento de um pedido ou a execução de reembolso.
- Não finalizar cancelamentos/reembolsos sem autorização. Registrar como não executados.

## 6. Consentimento antes da integração Meta na Cakto

A instalação nativa de Pixel não foi ativada. A documentação de [Pixel da Cakto](https://ajuda.cakto.com.br/pt-br/articles/56-como-configurar-o-pixel-do-facebook-na-cakto) descreve eventos, mas não foi encontrada comprovação suficiente do bloqueio de marketing antes do consentimento no checkout.

O titular pode pedir ao suporte oficial, sem enviar tokens ou dados de comprador:

- Como bloquear Pixel **e envio de servidor/CAPI** até consentimento válido, no domínio do checkout?
- Onde ficam as opções de aceitar, recusar e revogar marketing? Recusa impede ambos os canais? Como testar isso sem gerar compra?
- Há integração oficial para preferência entre a landing page Netlify e o domínio Cakto? O consentimento da landing page não deve ser presumido no checkout.
- No caso de Pixel + CAPI, quais eventos usam o mesmo `event_id` para deduplicação? `Purchase` fica restrito à aprovação, sem Pix/boleto pendente?

Só prosseguir depois de verificar a solução e testar aceitação, recusa e revogação. Não ligar a conexão global de todos os conjuntos de dados para tentar resolver uma pendência específica.

## 7. Modelo de evidência sem dados pessoais

Preencher na Issue #3 apenas os campos públicos abaixo. Guardar comprovantes e identificadores privadamente; não anexar CPF, endereço, e-mail de comprador, cartão, QR Pix, número de pedido, token, link de acesso individual ou o PDF.

| Verificação | Resultado real e data |
| --- | --- |
| Método de teste permitido pela Cakto | Pendente |
| Identificação e condições da oferta revisadas | Pendente |
| Produto e total corretos antes de pagar | Pendente |
| Pagamento aprovado no painel | Não executado |
| E-mail de confirmação/acesso recebido | Não executado |
| Acesso sem perfil administrativo | Não executado |
| PDF baixado e aberto; 40 páginas corretas | Não executado |
| Dispositivos testados | Não executado |
| Suporte recebeu e respondeu | Não executado |
| Instruções de arrependimento verificadas | Pendente; sem reembolso executado |
| Consentimento Cakto e eventos Meta | Bloqueados; integração desligada |

Ausência de erro visível não equivale a aprovação. Registrar falhas e limitações; corrigir e repetir somente a etapa afetada.
