import { FieldNames } from "./calc-imp-props";
import { CalcImpServices } from "./services";

export const calcBankWireTransferFee = (
  currency: string,
  buffer: Pick<Partial<Record<FieldNames, number>>, "Стоимость по инвойсу">,
  services: Pick<CalcImpServices, "changeCurrency" | "getBankWireTransferFee">
) => services.changeCurrency(
  services.getBankWireTransferFee(
    {
      amount: buffer["Стоимость по инвойсу"],
      currency,
    },
  ),
  currency,
)