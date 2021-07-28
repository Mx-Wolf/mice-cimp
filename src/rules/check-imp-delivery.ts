import { CalcImportProps, ValidationDetails } from "../calc-imp-props";
import { ErrorMessages } from "./consts";

export const checkImpDelivery = (props:Pick<CalcImportProps,"impDelivery">, validity:ValidationDetails):boolean =>{
  const {impDelivery} = props;
  if(typeof impDelivery === "number" && Number.isFinite(impDelivery) && impDelivery > 0){
    return true;
  }
  validity.errors["impDelivery"] = ErrorMessages.EXPECT_POSITIVE_IMPORT_DELIVERY;
  return false;
}