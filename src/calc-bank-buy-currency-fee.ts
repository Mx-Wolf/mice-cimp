import { FieldNames } from "./calc-imp-props";
import { CalcImpServices } from "./services";

export const calcBankBuyCurrencyFee = (
  currency: string,
  buffer: Pick<Partial<Record<FieldNames, number>>, "Стоимость по инвойсу">,
  services: Pick<CalcImpServices, "changeCurrency" | "getBankCurrencyExchangeFee">,
) => services.changeCurrency(
  services.getBankCurrencyExchangeFee({
    amount: buffer["Стоимость по инвойсу"],
    currency,
  }),
  currency);