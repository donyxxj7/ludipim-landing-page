import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { getPublicSupplierIdentity } from "@/lib/supplier-identity";

export const metadata: Metadata = {
  title: "Identificação do Fornecedor | Ludipim",
  description: "Informações de identificação e canais de contato do fornecedor dos materiais educativos Ludipim.",
};

export default function InformacoesDoFornecedor() {
  const supplier = getPublicSupplierIdentity(process.env);

  return (
    <LegalPage title="Identificação do Fornecedor" intro="Consulte a identificação do responsável pela oferta e os canais para atendimento relacionados ao produto Meu Primeiro Inglês Divertido.">
      <section>
        <h2>Quem oferece o produto</h2>
        <p><strong>Marca comercial:</strong> Ludipim.</p>
        <p><strong>Produto:</strong> Meu Primeiro Inglês Divertido — material educativo digital em PDF.</p>
        {supplier ? (
          <>
            <p><strong>Nome civil ou razão social:</strong> {supplier.legalName}.</p>
            <p><strong>{supplier.taxIdType} do fornecedor:</strong> {supplier.taxId}.</p>
            <p><strong>Endereço físico para contato:</strong> {supplier.contactAddress}.</p>
          </>
        ) : (
          <p><strong>Identificação legal em validação:</strong> o nome legal, o cadastro fiscal aplicável e o endereço físico do fornecedor ainda não foram confirmados para publicação. Esta página não substitui a identificação completa exigida para a oferta comercial.</p>
        )}
      </section>
      <section>
        <h2>Contato e atendimento</h2>
        <p><strong>E-mail para dúvidas, solicitações de acesso e arrependimento:</strong> <a href="mailto:endonyparadela2007@gmail.com">endonyparadela2007@gmail.com</a>.</p>
        <p>Para pedidos de reembolso, também está disponível o <a href="https://reembolso.cakto.com.br/" target="_blank" rel="noopener noreferrer">portal de reembolso da Cakto</a>.</p>
        <p>Não envie senhas, dados de cartão ou documentos sensíveis por e-mail sem orientação sobre um meio seguro.</p>
      </section>
      <section>
        <h2>Compra e disponibilização do material</h2>
        <p>O comprador realiza o pagamento na Cakto e acessa o PDF por meio da área de membros Cakto Members V3 após a confirmação do pagamento. A etapa de compra e entrega ainda depende de teste ponta a ponta.</p>
        <p>Veja também os <Link href="/termos-de-compra">Termos de Compra e Uso</Link>, a <Link href="/politica-de-privacidade">Política de Privacidade</Link> e a <Link href="/politica-de-reembolso">Política de Reembolso</Link>.</p>
      </section>
    </LegalPage>
  );
}
