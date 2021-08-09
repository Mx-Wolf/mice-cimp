import { FieldNames } from "./calc-imp-props";
import { BASE_CURRENCY } from "./consts";
import { CalcImpServices } from "./services";

export const calcBankComplianceFee = (
  currency: string,
  buffer: Pick<Partial<Record<FieldNames, number>>, "Стоимость по инвойсу">,
  services: Pick<CalcImpServices, "changeCurrency" | "getBankComplianceFee">,
) => services.changeCurrency(
  services.getBankComplianceFee(
    {
      amount: services.changeCurrency(
        {
          amount: buffer["Стоимость по инвойсу"],
          currency: currency
        },
        BASE_CURRENCY,
      ),
      currency,
    }
  ),
  currency,
)