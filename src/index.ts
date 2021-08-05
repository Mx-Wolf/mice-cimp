import { FieldNames } from "./calc-imp-props"
import { CalcImpServices } from "./services"
import { DefaultSettingsFx } from "./consts";
import { convertSettingsToCurrency } from "./convert-to-currency";
export const computeMinAgentPay = (currency: string, input: Partial<Record<FieldNames, number>>, services: CalcImpServices): Partial<Record<FieldNames, number>> => {
  const buffer: Partial<Record<FieldNames, number>> = {
    ...convertSettingsToCurrency(currency, services),
    ...input
  };
  throw new Error();
}