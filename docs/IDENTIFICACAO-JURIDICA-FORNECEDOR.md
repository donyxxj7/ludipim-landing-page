# Ludipim — dossiê de identificação jurídica do fornecedor

Data: 28/10/2026. **Preparação técnica concluída; identificação pública ainda INCOMPLETA.** Esta documentação não constitui parecer jurídico nem substitui validação cadastral/tributária.

## Base legal conferida

Decreto 7.962/2013, art. 2º: as ofertas no comércio eletrônico devem disponibilizar identificação do fornecedor (nome empresarial e número de inscrição em CPF/CNPJ, quando houver), **endereço físico e eletrônico**, meios de localização/contato, características do produto, custos acessórios discriminados, condições integrais e restrições da oferta. Art. 4º: serviço eletrônico adequado, confirmação imediata do recebimento de demandas e manifestação ao consumidor em até cinco dias. Art. 5º: exercício do arrependimento e confirmação de recebimento.

Fonte: https://legis.senado.leg.br/norma/413161/publicacao/15762397

ANPD: uma operação que realmente se enquadre como agente de pequeno porte pode ter dispensa de encarregado, **mas precisa manter um canal de comunicação com o titular** (Resolução CD/ANPD nº 2/2022, art. 11). O enquadramento não foi formalmente verificado. Fonte: https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no-2-de-27-de-janeiro-de-2022

## Dados já confirmados para a Ludipim

- Nome fantasia/marca: **Ludipim**.
- Oferta: **Meu Primeiro Inglês Divertido**, material digital PDF de 40 páginas, entregue por **Cakto Members V3** após pagamento aprovado.
- E-mail de suporte informado pelo responsável: **endonyparadela2007@gmail.com**. Publicado, **mas recebimento de solicitações e procedimento de resposta ainda não foram testados**.
- Pagamento: checkout Cakto (última auditoria: **produto R$ 14,90 + taxa R$ 0,99 = R$ 15,89 à vista**). Confirmar se mudou.
- Licença para uso pessoal/familiar e impressão para atividade pedagógica da própria turma: aprovada pelo titular e publicada nos termos.
- Três páginas jurídicas informativas no site, mas não considerar regularização concluída até preencher os dados reais.

## Campos indispensáveis ainda não confirmados

1. **Modalidade de venda:** titular confirmou que ainda **não possui MEI/CNPJ** e pretende operar inicialmente como **pessoa física (CPF)**; a formalização empresarial futura está apenas em planejamento. Isso não demonstra que a venda habitual com finalidade lucrativa esteja dispensada de registro/equiparação tributária. **Consultar contador/órgão competente para validar o enquadramento antes da operação regular.**
2. **Nome civil completo do vendedor:** foi informado privadamente pelo titular; sua publicação depende de autorização explícita e de conferência com o titular cadastrado na Cakto. Não inserir valores pessoais nesta documentação pública.
3. **Inscrição aplicável:** CPF foi informado pelo titular na conversa privada, sem verificação documental; não publicar sem autorização expressa e revisão da exposição necessária. Não registrar o número neste repositório público.
4. **Endereço físico:** logradouro, número, município, UF e CEP foram informados privadamente; o titular confirmou que se trata de sua residência. Não houve verificação postal ou de adequação jurídica. Confirmar eventual complemento. Não publicar endereço residencial sem autorização explícita e sem analisar alternativa de contato físico/comercial válida; não presumir que caixa postal isolada é suficiente.
5. Verificar se o mesmo responsável/identificação aparece no checkout, recibo e atendimento Cakto, inclusive de maneira compatível com os dados divulgados no site.
6. Testar contato de suporte e estabelecer procedimento para **confirmar imediatamente o recebimento** de reclamações/solicitações e **responder em até cinco dias**, conforme Decreto 7.962/2013; até o teste, não afirmar que já existe sistema de protocolo automático.
7. Revisão jurídica/tributária final com dados reais e confirmação de que as páginas correspondem à operação efetiva.

## Atenção tributária para 2026 e 2027

A Receita Federal informa que a pessoa física que exerce **habitual e profissionalmente** atividade econômica com finalidade de lucro pode ser equiparada a pessoa jurídica para fins de tributação. A necessidade de registro e documentação depende da atividade e do enquadramento; **não concluir que é permitido vender rotineiramente sem formalização apenas por usar CPF na Cakto**.

A Receita Federal também informou que obrigações de CNPJ e documentos fiscais para pessoas físicas enquadradas como contribuintes da CBS passaram a produzir efeitos a partir de 1º de janeiro de 2027, segundo Decreto 13.075/2026. Isso não dispensa outras obrigações vigentes em 2026.

- Orientação RFB, IRPF — atividade habitual: https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/publicacoes/perguntas-e-respostas/dirpf/pr-irpf-2024.pdf
- RFB — CNPJ/CBS para PF, 2027: https://www.gov.br/receitafederal/pt-br/assuntos/noticias/emissao-do-cnpj-e-de-documentos-fiscais-por-pessoas-fisicas-contribuintes-da-cbs-comecara-em-1o-de-janeiro-de-2027

## Preparação técnica já realizada

A rota pública `/informacoes-do-fornecedor` está ligada ao rodapé e às políticas. Ela exibe dados cadastrais **somente quando todos os campos abaixo estão completos E a autorização de publicação está explicitamente habilitada**. Dados preenchidos sem essa autorização continuam ocultos. Enquanto houver pendência, mostra um aviso verdadeiro. Isso **não substitui a obrigação de identificar o fornecedor no site**.

| Variável de ambiente Netlify — servidor | Conteúdo a informar DEPOIS de validação e autorização |
| --- | --- |
| `LUDIPIM_SUPPLIER_LEGAL_NAME` | Nome civil ou razão social confirmada |
| `LUDIPIM_SUPPLIER_TAX_ID_TYPE` | `CPF` ou `CNPJ` |
| `LUDIPIM_SUPPLIER_TAX_ID` | Número correspondente, para exibição pública |
| `LUDIPIM_SUPPLIER_CONTACT_ADDRESS` | Endereço físico completo e autorizado para exibição |
| `LUDIPIM_SUPPLIER_PUBLICATION_APPROVED` | `true` apenas DEPOIS de autorização explícita do titular para a exposição pública; padrão `false` |

**Segurança e publicação:**
- **Não inserir valores reais em código, issues, PRs, README, comentários ou logs do GitHub público.**
- Antes de adicionar variáveis, obter **aprovação explícita do responsável para exibir esses dados no site público**, pois o uso de variáveis de servidor evita o histórico Git, mas não torna a informação privada na página final.
- Configurar as variáveis na **Netlify do projeto Ludipim** com escopo apropriado e fazer **novo build/deploy de produção** para que a rota estática exiba os valores. Verificar o HTML público; não publicar dados parciais ou incorretos.
- A página de identificação só exibe o conjunto completo e autorizado. Se qualquer campo estiver vazio ou a autorização não for exatamente `true`, a identificação fica como **pendente**, e anúncios pagos continuam bloqueados.
- Revisar aviso de privacidade, Termos e a página do fornecedor para consistência; repetir conferência com o checkout da Cakto.
- Não ativar Meta Pixel, CAPI nem anúncios por causa desta preparação.

## Atendimentos da Cakto Members e do suporte

A entrega configurada é **Cakto Members V3**; não há obrigação técnica de ativar entrega por WhatsApp ou outro método para cumprir o teste. Confirmações e comunicações operacionais da plataforma devem ser avaliadas separadamente.

**Roteiro manual de atendimento, até haver uma solução de protocolo confirmada:**
1. Verificar a caixa de suporte regularmente.
2. Ao receber pedido, **confirmar imediatamente** a recepção pelo mesmo meio, identificando o contato e a demanda sem divulgar dados de terceiros.
3. Responder ao consumidor em até cinco dias, encaminhando resolução ou providências adotadas. Registrar minimamente a data e situação, de forma segura e sem expor dados em GitHub.
4. Para arrependimento, confirmar recebimento da manifestação e orientar o uso do portal de reembolso, sem limitar os direitos legais.
5. Para solicitações de dados pessoais, dar encaminhamento conforme LGPD e não solicitar documentos sem necessidade e meio seguro.

**Referências:** CDC art. 49; Decreto 7.962/2013 arts. 2º, 4º e 5º; LGPD; Resolução ANPD nº 2/2022.
