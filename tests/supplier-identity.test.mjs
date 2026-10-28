import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";
const source = await readFile(new URL("../lib/supplier-identity.ts", import.meta.url), "utf8");
const js = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.ES2020 } }).outputText;
const { getPublicSupplierIdentity } = await import(`data:text/javascript;base64,${Buffer.from(js).toString("base64")}`);
// Deliberately fictitious markers, never actual identity or address data.
const data = {
  LUDIPIM_SUPPLIER_LEGAL_NAME: "PRIVATE_TEST_NAME",
  LUDIPIM_SUPPLIER_TAX_ID_TYPE: "CPF",
  LUDIPIM_SUPPLIER_TAX_ID: "PRIVATE_TEST_ID",
  LUDIPIM_SUPPLIER_CONTACT_ADDRESS: "PRIVATE_TEST_ADDRESS",
};
test("complete private data is never public without explicit publication approval", () => {
  for (const approved of [undefined, "false", "TRUE", "yes"]) assert.equal(getPublicSupplierIdentity({ ...data, LUDIPIM_SUPPLIER_PUBLICATION_APPROVED: approved }), null);
});
test("approval alone never exposes incomplete identity", () => {
  for (const key of Object.keys(data)) assert.equal(getPublicSupplierIdentity({ ...data, [key]: "", LUDIPIM_SUPPLIER_PUBLICATION_APPROVED: "true" }), null);
});
test("approved complete identity returns only public identity fields", () => {
  const result = getPublicSupplierIdentity({ ...data, LUDIPIM_SUPPLIER_PUBLICATION_APPROVED: "true", UNRELATED_SECRET: "never-public" });
  assert.deepEqual(result, { legalName: data.LUDIPIM_SUPPLIER_LEGAL_NAME, taxIdType: "CPF", taxId: data.LUDIPIM_SUPPLIER_TAX_ID, contactAddress: data.LUDIPIM_SUPPLIER_CONTACT_ADDRESS });
});
test("unsupported identifier type remains private", () => {
  assert.equal(getPublicSupplierIdentity({ ...data, LUDIPIM_SUPPLIER_PUBLICATION_APPROVED: "true", LUDIPIM_SUPPLIER_TAX_ID_TYPE: "other" }), null);
});
