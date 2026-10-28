import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Termos de Compra e Uso | Ludipim",
  description: "Informações sobre o PDF Meu Primeiro Inglês Divertido, preços, acesso, licença e suporte.",
};

export default function TermosDeCompra() {
  return (
    <LegalPage title="Termos de Compra e Uso" intro="Leia as informações essenciais sobre o material digital, seu preço e suas condições de utilização antes de finalizar a compra.">
      <section>
        <h2>1. Produto e fornecedor</h2>
        <p>A <strong>Ludipim</strong> oferece o material digital <strong>Meu Primeiro Inglês Divertido</strong>, um PDF com 40 páginas de atividades introdutórias de inglês, temas como cores, números e animais, e gabaritos. Não há envio de produto físico. O conteúdo é um apoio educativo e não substitui o ensino formal.</p>
        <p>Contato do vendedor para dúvidas: <a href="mailto:endonyparadela2007@gmail.com">endonyparadela2007@gmail.com</a>. Consulte os dados cadastrais e o estado de validação em <Link href="/informacoes-do-fornecedor">Identificação do Fornecedor</Link>. A marca não substitui o nome legal do responsável pela oferta.</p>
      </section>
      <section>
        <h2>2. Preço e condições</h2>
        <p>O preço do produto anunciado é <strong>R$ 14,90</strong>. Na última conferência do checkout, era exibida uma <strong>taxa de serviço de R$ 0,99</strong>, resultando em <strong>R$ 15,89 à vista</strong>. Valores e modalidades de parcelamento podem variar conforme a configuração da plataforma. Confira a discriminação de custos e as condições vigentes na tela de confirmação do pedido antes de pagar.</p>
        <p>A contratação é de pagamento único, não sendo anunciada assinatura recorrente para este material.</p>
      </section>
      <section>
        <h2>3. Pagamento e entrega digital</h2>
        <p>O pagamento é realizado em ambiente externo da <strong>Cakto</strong>, acessado pelo <a href="https://pay.cakto.com.br/3erzio8_1247724" target="_blank" rel="noopener noreferrer">checkout oficial do produto</a>. A efetivação da compra está sujeita à confirmação do pagamento pela plataforma.</p>
        <p>Após a aprovação, o comprador deverá seguir as instruções da Cakto para entrar na área de membros e obter o PDF. O acesso depende da configuração de entrega efetiva na plataforma e pode exigir criação de senha ou autenticação. Caso não receba as orientações ou encontre problemas, contate o suporte da Ludipim.</p>
      </section>
      <section>
        <h2>4. Uso permitido do material</h2>
        <p>O comprador recebe licença não exclusiva e intransferível para utilizar o PDF como apoio ao aprendizado, podendo realizar impressões para uso pessoal, familiar e em atividades pedagógicas de sua própria turma, sem finalidade de revenda do material.</p>
        <p>Não é permitida a revenda, publicação, redistribuição do arquivo digital, compartilhamento em repositórios públicos, comercialização de cópias ou remoção de informações de autoria, salvo autorização expressa do titular dos direitos. Os direitos previstos na legislação do consumidor permanecem preservados.</p>
      </section>
      <section>
        <h2>5. Limitações pedagógicas</h2>
        <p>O material é introdutório. O ritmo de aprendizagem varia de criança para criança; não há promessa de fluência, resultado acadêmico específico ou substituição das aulas e do acompanhamento por responsáveis e profissionais.</p>
      </section>
      <section>
        <h2>6. Arrependimento e reembolso</h2>
        <p>Compras realizadas pela internet estão sujeitas ao direito de arrependimento previsto no artigo 49 do Código de Defesa do Consumidor. Consulte a <Link href="/politica-de-reembolso">Política de Reembolso</Link> para conhecer os canais de solicitação e as condições legais. A compra de conteúdo digital não elimina automaticamente os direitos do consumidor.</p>
      </section>
      <section>
        <h2>7. Privacidade e atendimento</h2>
        <p>Veja como as informações são tratadas na <Link href="/politica-de-privacidade">Política de Privacidade</Link>. Para problemas de pagamento, acesso, licença ou solicitações relacionadas ao produto, entre em contato com <a href="mailto:endonyparadela2007@gmail.com">endonyparadela2007@gmail.com</a>.</p>
      </section>
      <section>
        <h2>8. Referência legal</h2>
        <p>Aplicam-se as normas brasileiras de proteção ao consumidor, especialmente o <a href="https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm" target="_blank" rel="noopener noreferrer">Código de Defesa do Consumidor</a> e o <a href="https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/decreto/d7962.htm" target="_blank" rel="noopener noreferrer">Decreto nº 7.962/2013</a>.</p>
      </section>
    </LegalPage>
  );
}
