import { CalcImportProps, ValidationDetails } from "../calc-imp-props";
import { ErrorMessages } from "./consts";
export const checkImpInsurance = (props: Pick<CalcImportProps, "impInsuranceRate">, validity: ValidationDetails): boolean => {
  const { impInsuranceRate } = props;
  if (typeof impInsuranceRate === "number" && Number.isFinite(impInsuranceRate) && impInsuranceRate > 0) {
    return true;
  }
  validity.errors["impInsuranceRate"] = ErrorMessages.EXPECT_FRACTION_INSURANCE_RATE;
  return false;
}