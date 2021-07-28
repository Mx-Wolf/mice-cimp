import { CalcImportProps, ValidationDetails } from "../calc-imp-props";
import { ErrorMessages } from "./consts";

export const checkImpInvoceToBePaice = (props: Pick<CalcImportProps, "impInvoceToBePaid">, validity: ValidationDetails): boolean => {
  const { impInvoceToBePaid } = props;
  if (!Number.isFinite(impInvoceToBePaid) || impInvoceToBePaid <= 0) {
    validity.errors["impInvoceToBePaid"] = ErrorMessages.EXPECT_POSITIVE_INVOICE_AMOUNT;
    return false;
  }
  return true;
}