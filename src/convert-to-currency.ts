import { FieldNames } from "./calc-imp-props";
import { CalcImpServices } from "./services";
import { SettingItem } from "./consts";

export const convertSettingsToCurrency = (defaultSettingsFx: Partial<Record<FieldNames, SettingItem>>, currency: string, services: Pick<CalcImpServices,"changeCurrency">): Partial<Record<FieldNames, number>> => {
  const result: Partial<Record<FieldNames, number>> = {};
  return Object.keys(defaultSettingsFx).reduce((a, b) => {
    const setting = defaultSettingsFx[b as FieldNames];
    if (typeof setting !== "undefined") {
      const { unit, value } = setting;
      a[b as FieldNames] = unit === "RUB" ? services.changeCurrency({ amount: value, currency: "RUR" }, currency) : value;
    }
    return a;
  }, result);
}