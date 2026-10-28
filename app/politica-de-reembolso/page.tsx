import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Política de Reembolso | Ludipim",
  description: "Entenda como solicitar reembolso de produtos digitais da Ludipim e o direito de arrependimento.",
};

export default function PoliticaDeReembolso() {
  return (
    <LegalPage title="Política de Reembolso" intro="Nosso objetivo é que você receba o material adquirido e tenha um caminho claro para solicitar ajuda, cancelamento ou reembolso.">
      <section>
        <h2>1. Direito de arrependimento</h2>
        <p>Em compras realizadas fora de estabelecimento comercial, como pela internet, o artigo 49 do Código de Defesa do Consumidor prevê <strong>sete dias para exercer o direito de arrependimento</strong>, contados da contratação ou do recebimento, conforme aplicável. Você pode solicitar a desistência nesse prazo sem necessidade de apresentar justificativa.</p>
        <p>O fato de o material ser digital ou já ter sido baixado não afasta, por si só, os direitos previstos na legislação aplicável.</p>
      </section>
      <section>
        <h2>2. Como solicitar</h2>
        <ol>
          <li>Escreva para <a href="mailto:endonyparadela2007@gmail.com">endonyparadela2007@gmail.com</a>, informando o e-mail utilizado na compra e o produto adquirido. Não envie senhas, documentos ou dados completos de cartão.</li>
          <li>Se preferir, utilize o <a href="https://reembolso.cakto.com.br/" target="_blank" rel="noopener noreferrer">portal de reembolso da Cakto</a>, com as informações utilizadas na compra.</li>
          <li>Acompanhe as instruções e a confirmação da solicitação na plataforma ou pelo canal de suporte.</li>
        </ol>
        <p>Em caso de dificuldade com o acesso ao produto ou cobrança, use os mesmos canais para obter orientação.</p>
      </section>
      <section>
        <h2>3. Valores e processamento</h2>
        <p>Quando o reembolso for devido, serão observados os valores pagos e os direitos previstos na legislação, inclusive em relação às cobranças acessórias. O processamento pode depender do meio de pagamento e dos prazos operacionais da Cakto, da instituição financeira ou do emissor do cartão. Não há garantia de um prazo bancário fixo para a disponibilidade do crédito.</p>
      </section>
      <section>
        <h2>4. Problemas com o material</h2>
        <p>Se o PDF não for liberado após a confirmação do pagamento, estiver inacessível, apresentar defeito ou divergir substancialmente da oferta, entre em contato com o atendimento. Os direitos legais relativos a problemas de fornecimento ou vícios não se limitam automaticamente ao prazo de arrependimento.</p>
      </section>
      <section>
        <h2>5. Regras da plataforma e legislação</h2>
        <p>A Cakto disponibiliza um <a href="https://www.cakto.com.br/reembolso" target="_blank" rel="noopener noreferrer">guia de solicitação de reembolso</a>. Essas orientações operacionais não substituem direitos assegurados pela legislação brasileira. Consulte a <Link href="/informacoes-do-fornecedor">Identificação do Fornecedor</Link> e também o <a href="https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm" target="_blank" rel="noopener noreferrer">Código de Defesa do Consumidor</a>.</p>
      </section>
    </LegalPage>
  );
}
