/** Data passed here is private unless the owner explicitly approves public display. */
export function getPublicSupplierIdentity(env: Record<string, string | undefined>) {
  if (env.LUDIPIM_SUPPLIER_PUBLICATION_APPROVED !== "true") return null;
  const legalName = env.LUDIPIM_SUPPLIER_LEGAL_NAME?.trim();
  const taxIdType = env.LUDIPIM_SUPPLIER_TAX_ID_TYPE?.trim();
  const taxId = env.LUDIPIM_SUPPLIER_TAX_ID?.trim();
  const contactAddress = env.LUDIPIM_SUPPLIER_CONTACT_ADDRESS?.trim();
  if (!legalName || !taxId || !contactAddress || (taxIdType !== "CPF" && taxIdType !== "CNPJ")) return null;
  return { legalName, taxIdType, taxId, contactAddress };
}
