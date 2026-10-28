# Ludipim — revisão do lançamento em 28/10/2026

Checklist oficial: [Issue #3](https://github.com/donyxxj7/ludipim-landing-page/issues/3). **Vendas e anúncios ainda não liberados.** Nenhum pagamento, reembolso, cadastro de cartão, publicação de anúncio ou gasto executado pelo assistente.

## Evidência dos painéis no Edge

A extensão identificou o navegador como **Edge** e permitiu ler as guias autenticadas da Cakto e Meta. A indisponibilidade anterior do Chrome não se aplica a esta conferência. Registrar apenas fatos realmente observados, sem dados fiscais, residenciais ou links privados de arquivos.

| Item | Evidência observada em 28/10 | Limite |
| --- | --- | --- |
| Produto Cakto | Meu Primeiro Inglês Divertido, ativo | Não comprova aprovação de uma transação |
| Members V3 | Módulo publicado em 26/10, aula “Baixe seu PDF — 40 páginas” publicada e com liberação imediata; 1 anexo de 19,9 MB | Download administrativo não produziu arquivo local para inspeção; entrega de comprador não testada |
| Oferta / Pix | R$ 14,90 + R$ 0,99 = **R$ 15,89** no resumo público | Nenhum Pix gerado |
| Cartão | Resumo inicial: **2 × R$ 8,62**; selecionando uma parcela, resumo total **R$ 15,89** | Seletor exibe 2 × R$ 8,12 / 1 × R$ 14,91, divergentes do resumo; precisa esclarecimento/correção da Cakto. Nenhum dado de cartão preenchido |
| Página de vendas Cakto | Campo contém https://ludipim.netlify.app | Sem alteração financeira |
| Suporte Cakto | Campo cadastrado protegido/oculto pelo navegador; correspondência com endereço público não confirmada | A comparação inicial foi inconclusiva por mascaramento; nenhuma alteração salva; teste de caixa pendente |
| Consentimento | Checkout apresenta aviso operacional de WhatsApp; não foi identificada opção de aceitar/recusar marketing nas telas consultadas | Aviso de compra não comprova consentimento de Pixel/CAPI; não concluir ausência em toda a plataforma |
| Pixel Cakto | ID vazio, nenhum token configurado; Purchase por Pix/boleto gerados desmarcado | Integração continua desligada |
| Meta / administração | Portfólio Ludipim; perfil do titular com acesso total | Não foram concedidas novas permissões |
| Página e conta | Página Ludipim e Ludipim Ads pertencem ao portfólio; conta em BRL / Brazil/East, sem forma de pagamento | Guia de ativos da conta não lista Página; diálogo de conexão da Página oferece Instagram, não vínculo com conta de anúncios. Não declarar vínculo direto concluído |
| Dataset | Ludipim — Conversões, ID 1112474941151817, conectado à Ludipim Ads | Nenhum evento recebido; sem teste real ou deduplicação validada |

## Site e código

- Netlify em produção: https://ludipim.netlify.app. Na abertura desta revisão, deploy `6ae1dea8d593adf70e2e3473` em estado `ready`, commit `74ad74474a6dc41ab29eda2961374c81564157fd`.
- Ambiente consultado sem variáveis de ativação Meta ou identificação do fornecedor. Publicação dos dados pessoais não autorizada.
- Capturas da landing page inspecionadas nas larguras 360, 390, 768 e 1440 px: hierarquia, imagens, oferta, botões, FAQ e rodapé sem defeito visual impeditivo observado. Origem: [workflow 40622484565](https://github.com/donyxxj7/ludipim-landing-page/actions/runs/40622484565), artefato `qa-ludipim-responsive`. São capturas anteriores da página publicada; não comprovam automaticamente a versão de um PR posterior.
- Corrigido o QA para compilar e abrir o código do próprio PR. Ampliada a verificação para quatro rotas jurídicas, sitemap, contato, links e ausência de solicitações Meta com marketing desligado; screenshots ficam anexas ao novo workflow.
- Preparada proteção para que dados completos do fornecedor também exijam `LUDIPIM_SUPPLIER_PUBLICATION_APPROVED=true`, além da autorização consciente do titular. Nenhum valor pessoal inserido.
- Descrição e termos esclarecem **40 páginas no total**, incluindo capa e materiais de apoio.

## Bloqueios que continuam abertos

1. Solução válida para identificação pública do fornecedor PF e validação cadastral/fiscal; CPF e endereço residencial permanecem privados, sem autorização de publicação.
2. Procedimento de teste permitido pela Cakto; aprovação real, e-mail, login de comprador e download correto do PDF. Não confundir prévia administrativa com entrega.
3. Conferência do suporte cadastrado e teste de recebimento/resposta; instruções de arrependimento aplicáveis ao pedido ainda não validadas. Não houve reembolso.
4. Esclarecimento da divergência de parcelas e vinculação acessível dos termos do vendedor no checkout. As telas consultadas não apresentaram campo de consentimento para marketing.
5. Comprovação do consentimento no checkout e testes reais dos eventos, valor, moeda e deduplicação antes de Meta Pixel/CAPI.
6. Campanha permanece sem publicação; mínimo de orçamento e encargos Meta ainda não conferidos na criação. O plano R$ 100 é documental, sem orçamento comprometido.

Roteiro para o titular: [validação da primeira venda](ROTEIRO-VALIDACAO-PRIMEIRA-VENDA.md). A Issue #3 deve registrar separadamente o resultado dos checks do novo PR e do deploy posterior, sem transformar estes bloqueios em tarefas concluídas.
