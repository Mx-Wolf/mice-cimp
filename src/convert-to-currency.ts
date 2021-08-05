import { FieldNames } from "./calc-imp-props";
import { CalcImpServices } from "./services";
import { DefaultSettingsFx } from "./consts";

export const convertSettingsToCurrency = (currency: string, services: CalcImpServices): Partial<Record<FieldNames, number>> => {
  const result: Partial<Record<FieldNames, number>> = {};
  return Object.keys(DefaultSettingsFx).reduce((a, b) => {
    const setting = DefaultSettingsFx[b as FieldNames];
    if (typeof setting !== "undefined") {
      const { unit, value } = setting;
      a[b] = unit === "RUB" ? services.changeCurrency({ amount: value, currency: "RUR" }, currency) : value;
    }
    return a;
  }, result);
}