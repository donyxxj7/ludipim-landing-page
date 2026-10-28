# Integração Meta preparada — ativação bloqueada

Conjunto confirmado no navegador em 27/10/2026: **Ludipim — Conversões**, ID público **1112474941151817**, proprietário Ludipim. A aba Ativos conectados mostra **Ludipim Ads**. A Página Ludipim também já aparece como propriedade do portfólio. Essas etapas foram concluídas pelo titular antes da retomada; não atribuir a criação ao agente.

## Código preparado

- `components/MarketingConsent.tsx`: escolha explícita entre aceitar e recusar publicidade, botões com o mesmo destaque e controle persistente para mudar a escolha.
- `lib/meta-consent.ts`: bloqueia envio antes de consentimento e das duas condições de liberação. Trata expiração, versão da preferência, revogação e a corrida entre carregamento do SDK e retirada do consentimento.
- `lib/meta-browser.ts`: adaptação do código-base exibido pela Meta para o conjunto confirmado. Nenhum SDK, imagem `noscript` ou conexão antecipada à Meta é inserido antes da escolha válida.
- Registro local mínimo: versão, escolha e instante, com validade de 180 dias; sem nome/e-mail. Falha ao guardar a preferência mantém o rastreamento bloqueado.
- Eventos preparados: **PageView** e **ViewContent**, somente na landing page do produto e após consentimento. `ViewContent` usa preço base R$ 14,90 e BRL.
- A landing page não envia **InitiateCheckout** nem **Purchase**. A abertura efetiva do checkout e a compra aprovada pertencem à integração oficial da Cakto; não duplicar eventos no clique do botão.
- Revogação também é observada entre abas; remove somente cookies Meta acessíveis ao host e manda revogação ao SDK se já inicializado.

## Duas condições de liberação — ambas desligadas

`.env.example` contém o Pixel ID público e:

```
NEXT_PUBLIC_META_TRACKING_ENABLED=false
NEXT_PUBLIC_META_PRIVACY_READY=false
```

O código só permite carregar a Meta com **ambas** em `true`, Pixel ID válido e consentimento explícito ou lembrado ainda válido. Não alterar os valores de produção enquanto os bloqueios abaixo persistirem. Nenhum token CAPI é necessário para preparar a integração de navegador e nenhum deve ser exposto em `NEXT_PUBLIC_*` ou no GitHub.

## Configuração Meta revisada

O recurso opcional **Incluir automaticamente informações mais detalhadas de páginas e produtos** foi desativado. O estado Desativado foi confirmado após a alteração. A finalidade é limitar enriquecimento automático adicional durante a preparação. Isso não desativa o conjunto de dados. Eventos automáticos e correspondência avançada estavam desligados e não foram ativados. A conexão global à API de Conversões também não foi ativada.

## Bloqueios para ativação

1. Completar/validar identificação do responsável e demais informações cadastrais ainda pendentes nas páginas públicas. Não publicar documentos ou endereço pessoal sem decisão explícita do titular.
2. Rever a política e a operação de dados de publicidade, inclusive o compartilhamento com a Meta e a revogação.
3. Confirmar o controle de consentimento do checkout Cakto. A preferência da landing page **não se transfere automaticamente** para o domínio da Cakto. A documentação oficial diz que cadastrar o ID já habilita a integração; a interface consultada não apresentou controle de consentimento. Portanto, **o ID não foi salvo na Cakto e nenhum token foi gerado**.
4. Após liberação da privacidade e escolha de método suportado, configurar a Cakto e testar recebimento real em Eventos de teste. Manter Purchase para Pix/boleto gerados desligado.
5. Confirmar entrega após pagamento realmente aprovado e validar valor/moeda e deduplicação da compra Pixel/CAPI. Nenhuma compra de teste foi realizada.

## Verificação

`node --test tests/meta-consent.test.mjs` executa testes do código TypeScript real, compilado em memória, com transporte simulado e um adaptador DOM mínimo. Não envia eventos para a Meta. Verifica bloqueio por recusa/ausência de escolha, condições de liberação, ID inválido, eventos permitidos e preço, duplicação de efeitos, revogação antes do SDK carregar, falha de rede, expiração e carregamento único do SDK.

Esses testes **não comprovam** recebimento dos eventos na Meta, deduplicação CAPI, comportamento do checkout nem entrega após pagamento. QA interativo do banner com integrações habilitadas deve ocorrer em ambiente autorizado e controlado antes de ativar em produção.

## Referências

- Conjunto: https://eventsmanager.facebook.com/events_manager2/list/dataset/1112474941151817/overview?business_id=1804297237275669
- Cakto: https://ajuda.cakto.com.br/pt-br/articles/56-como-configurar-o-pixel-do-facebook-na-cakto
- ANPD: https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_orientativo_cookies_e_protecao_de_dados_pessoais
