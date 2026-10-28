import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Política de Privacidade | Ludipim",
  description: "Entenda como a Ludipim trata dados de visitantes, compradores e pessoas que entram em contato.",
};

export default function PoliticaDePrivacidade() {
  return (
    <LegalPage title="Política de Privacidade" intro="Este aviso explica as práticas de privacidade relacionadas à landing page da Ludipim, ao atendimento e ao redirecionamento para a plataforma de pagamento.">
      <section>
        <h2>1. Quem oferece o serviço</h2>
        <p>A Ludipim é a marca responsável pela apresentação do material educativo <strong>Meu Primeiro Inglês Divertido</strong>. Para solicitações sobre dados pessoais e atendimento, utilize <a href="mailto:endonyparadela2007@gmail.com">endonyparadela2007@gmail.com</a>.</p>
        <p>A identificação legal completa do fornecedor ainda precisa ser complementada neste aviso, após validação dos dados cadastrais. Não insira dados bancários ou documentos sensíveis em mensagens comuns de e-mail.</p>
      </section>
      <section>
        <h2>2. Quais dados podem ser tratados</h2>
        <ul>
          <li><strong>Navegação:</strong> a infraestrutura de hospedagem pode processar dados técnicos, como endereço IP, horário, identificadores de conexão, tipo de navegador e registros de segurança.</li>
          <li><strong>Atendimento:</strong> se você escrever para o e-mail de suporte, podemos tratar o endereço remetente, o conteúdo da mensagem e as informações necessárias para responder.</li>
          <li><strong>Compra:</strong> ao selecionar o botão de compra, você sai desta página e acessa a Cakto, que solicita os dados necessários para pagamento e disponibilização do material conforme suas próprias políticas.</li>
        </ul>
        <p>Esta versão da landing page não dispõe de formulário próprio de cadastro de leads ou inscrição em newsletter. Dados eventualmente fornecidos na Cakto não são um cadastro automático de newsletter na Ludipim.</p>
      </section>
      <section>
        <h2>3. Finalidades e fundamentos do tratamento</h2>
        <p>Os dados necessários são utilizados para disponibilizar o site, preservar sua segurança, responder a solicitações, administrar pedidos quando cabível, cumprir obrigações legais e exercer direitos. A base legal aplicável depende da atividade concreta e poderá envolver a execução de contrato, obrigação legal ou interesse legítimo sujeito às exigências da LGPD.</p>
        <p>O envio de publicidade por e-mail e tecnologias de rastreamento não essenciais para marketing precisam ser avaliados separadamente e, quando exigido, condicionados à manifestação válida do visitante.</p>
      </section>
      <section>
        <h2>4. Compartilhamento e fornecedores técnicos</h2>
        <p>O site utiliza a <strong>Netlify</strong> para hospedagem. As compras e o acesso ao conteúdo são realizados por meio da <strong>Cakto</strong> e, quando habilitada, sua área de membros. Esses prestadores podem tratar dados para cumprir suas respectivas funções, com regras próprias. Consulte seus avisos de privacidade nos respectivos ambientes.</p>
        <p>Não há autorização para divulgar ou vender dados pessoais de compradores a terceiros para finalidades alheias ao atendimento e à contratação.</p>
      </section>
      <section>
        <h2>5. Cookies e ferramentas de medição</h2>
        <p>Ferramentas técnicas necessárias ao funcionamento da hospedagem podem utilizar registros ou tecnologias de armazenamento. Qualquer implementação ou mudança em Pixel da Meta, API de Conversões, cookies de publicidade ou ferramentas de analytics deverá ser refletida nesta política e acompanhada dos controles legais aplicáveis, inclusive consentimento quando necessário.</p>
        <p>A integração preparada para o Pixel da Meta permanece desativada nesta versão. Se for habilitada após a revisão dos requisitos de privacidade, só carregará a ferramenta após sua aceitação de publicidade, com opção de recusar sem impedir a compra e de revogar em “Preferências de cookies”. A escolha será guardada neste navegador por até 180 dias, sem nome ou e-mail nesse registro.</p>
        <p>Quando autorizado e habilitado, o Pixel pode enviar à Meta informações técnicas de conexão, navegador, endereço da página visitada, identificadores de cookies e eventos de visualização da página e do produto, para mensurar publicidade. Consulte a <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">Política de Privacidade da Meta</a>. Não coletamos diretamente dados de crianças nesta página.</p>
        <p>A preferência desta landing page não é automaticamente transferida à Cakto. O rastreamento no checkout exige revisão independente dos controles disponíveis naquela plataforma. Esta política não declara que a Cakto, a Netlify ou outros serviços de terceiros estejam livres de cookies.</p>
      </section>
      <section>
        <h2>6. Conservação e segurança</h2>
        <p>Os dados são mantidos pelo tempo necessário ao atendimento, à relação contratual, à segurança e às obrigações legais cabíveis, observadas as regras de retenção de cada plataforma. São adotadas medidas proporcionais para proteção das informações, sem promessa de segurança absoluta na internet.</p>
      </section>
      <section>
        <h2>7. Seus direitos</h2>
        <p>Nos termos da LGPD, você pode solicitar confirmação de tratamento, acesso, correção, eliminação ou anonimização quando cabível, informações sobre compartilhamento e outros direitos previstos em lei. Escreva para <a href="mailto:endonyparadela2007@gmail.com">endonyparadela2007@gmail.com</a>. Caso a solicitação envolva dados tratados diretamente pela Cakto, também poderá ser necessário utilizar os canais daquela plataforma.</p>
      </section>
      <section>
        <h2>8. Crianças e responsáveis</h2>
        <p>O conteúdo educativo é destinado a crianças, mas a compra e eventuais contatos de atendimento devem ser realizados por adultos responsáveis. Não solicitamos diretamente dados de crianças nesta landing page.</p>
      </section>
      <section>
        <h2>9. Mudanças e referências</h2>
        <p>Este aviso poderá ser atualizado quando as operações, integrações ou informações cadastrais forem alteradas. A versão vigente estará nesta página.</p>
        <p>Referência: <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm" target="_blank" rel="noopener noreferrer">Lei Geral de Proteção de Dados (LGPD)</a>.</p>
      </section>
    </LegalPage>
  );
}
