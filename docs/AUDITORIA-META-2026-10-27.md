# Ludipim — auditoria de preparação Meta/Cakto

Data local: 27/10/2026. Verificação direta no navegador autenticado. **Resultado: NÃO pronta para iniciar mídia paga.**

## Configurações verificadas

| Recurso | Evidência observada |
| --- | --- |
| Portfólio Ludipim | ID 1804297237275669; perfil titular com acesso total |
| Ludipim Ads | ID 2162550774472109; propriedade de Ludipim; BRL; Brazil/East; titular com acesso total |
| Página Ludipim | Página encontrada pelo endereço existente; Meta confirmou controle total do titular na Página e no portfólio |
| Vínculo da Página | Portfólio sem Página adicionada/principal; conta de anúncios sem ativos conectados. Etapa final de vínculo preparada e não enviada |
| Instagram | Nenhuma conta do Instagram adicionada ao portfólio |
| Pixel | Nenhum conjunto de dados listado; Gerenciador de Eventos sem fonte conectada. Criação preparada, não concluída |
| Conta de anúncios | Zero campanhas ativas e R$ 0,00 gastos nos últimos 7 dias; tela de preparação exige Página, telefone verificado e forma de pagamento |
| Qualidade da conta | Suporte empresarial exibiu nenhum anúncio rejeitado e nenhum anúncio disponível para análise; isso não elimina as pendências operacionais de preparação |
| Pagamento Meta | Nenhuma forma de pagamento adicionada; não foi alterado |
| Dados do portfólio | Verificação empresarial não concluída e e-mail de contato com confirmação pendente. Não inferir que verificação empresarial seja obrigatória para esta campanha |
| Cakto | Produto ativo, pagamento único de R$ 14,90 e acesso vitalício |
| Oferta pública | Checkout correto; R$ 14,90 + R$ 0,99 de taxa; Pix total R$ 15,89; cartão abriu em 2x de R$ 8,62 |
| Entrega configurada | Módulo e aula publicados, liberação imediata, material extra de 19,9 MB |
| Entrega efetiva | Não testada por comprador com pagamento aprovado; tentativa de download administrativo não retornou arquivo para inspeção |
| PDF fornecido pelo titular | 40 páginas A4, sem criptografia; 19.867.565 bytes. Capa, atividades, guia, gabaritos e certificado. Não comprova identidade binária com o anexo da Cakto |

## Alterações efetivamente salvas

- Cakto: desativadas as opções de enviar `Purchase` na geração de Pix e de boleto. Após salvar e recarregar, ambas continuaram desmarcadas.
- Código proposto em PR: exibir taxa de serviço e total no Pix junto às chamadas de compra; avisar sobre juros de parcelamento; esclarecer que o PDF tem 40 páginas no total.
- Documentação de rastreamento, entrega e orçamento atualizada com evidências e limitações.

Nenhuma compra, geração de Pix, cobrança, publicação de anúncio ou teste fictício foi executado. Nenhum token foi gerado ou incluído no código.

## Bloqueios e intervenções

1. Confirmar o aceite dos Termos Comerciais/Políticas de Páginas e dos Termos das Ferramentas Comerciais da Meta nas etapas preparadas. Vínculo e criação não foram enviados.
2. Criar o conjunto “Ludipim — Conversões” após confirmação; conectar à conta de anúncios e integrar à Cakto pelo método oficial.
3. Completar suporte real, identificação do responsável, políticas de compra/privacidade e mecanismo de consentimento antes de habilitar rastreamento publicitário. Não há aprovação jurídica presumida.
4. Confirmar telefone e e-mail pelos mecanismos oficiais da Meta. Não registrar cartões ou adicionar saldo nesta tarefa.
5. Executar teste autorizado de pagamento aprovado → acesso → download. Sem teste disponível sem pagamento, manter pendente; não realizar compra real sem autorização específica.
6. Validar `PageView`, `ViewContent`, `InitiateCheckout` e um `Purchase` real, valor/moeda e deduplicação Pixel/CAPI. Nenhum foi validado nesta auditoria.
7. Somente depois, montar rascunho de Vendas: um conjunto para adultos no Brasil e dois anúncios com capa/prévia reais, orçamento vitalício pretendido de R$ 100 por 5 dias. Mínimos e encargos da Meta ainda precisam ser verificados; não aumentar o limite para satisfazê-los.

## Campanha

Nenhuma campanha criada nesta execução: a condição de mensuração/entrega validada não foi atendida. Plano revisado em `PLANO-TESTE-ADS-R100.md`; plano não equivale a rascunho salvo na Meta.

## Links

- Portfólio: https://business.facebook.com/latest/settings/business_info?business_id=1804297237275669
- Página/vínculo: https://business.facebook.com/latest/settings/pages?business_id=1804297237275669
- Pixel/criação: https://business.facebook.com/latest/settings/events_dataset_and_pixel?business_id=1804297237275669
- Anúncios: https://adsmanager.facebook.com/adsmanager/manage/accounts?act=2162550774472109&business_id=1804297237275669
- Cakto: https://app.cakto.com.br/dashboard/products?tab=products&flow=v2
- Checkout: https://pay.cakto.com.br/3erzio8_1247724
- Landing page: https://ludipim.netlify.app
- ANPD: https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_orientativo_cookies_e_protecao_de_dados_pessoais

**Nenhum dinheiro gasto nesta execução.**
