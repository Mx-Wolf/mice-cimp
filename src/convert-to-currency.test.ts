import { FieldNames } from "./calc-imp-props"
import { SettingItem } from "./consts"
import { convertSettingsToCurrency } from "./convert-to-currency"
import { CalcImpServices, Value } from "./services"
const VALUE_FROM_CHANGE_CURRENCY = 73;
const VALUE_IN_SETTINGS = 42;
const VALUE_WHEN_DEFAULT = 97;
describe("извлечение данных в нужной валюте из настроек по умолчанию", () => {
  const services: Pick<CalcImpServices, "changeCurrency"> = {
    changeCurrency: (from: Value, to: string) => VALUE_FROM_CHANGE_CURRENCY,
  };
  describe("когда настройка в валюте", () => {
    const defaultSettingsFx: Partial<Record<FieldNames, SettingItem>> = {
      "Вознагр. за орг.перевозки": { unit: "CUR", value: VALUE_IN_SETTINGS },
    };
    it("возвращает как есть", () => {
      const { "Вознагр. за орг.перевозки": a = VALUE_WHEN_DEFAULT } = convertSettingsToCurrency(defaultSettingsFx, "", services);
      expect(a).toBe(VALUE_IN_SETTINGS);
    });
  });
  describe("когда настройки в долях",()=>{
    const defaultSettingsFx: Partial<Record<FieldNames, SettingItem>> = {
      "Вознагр. за орг.перевозки": { unit: "FRAC", value: VALUE_IN_SETTINGS },
    };
    it("возвращает как есть",()=>{
      const { "Вознагр. за орг.перевозки": a = VALUE_WHEN_DEFAULT } = convertSettingsToCurrency(defaultSettingsFx, "", services);
      expect(a).toBe(VALUE_IN_SETTINGS);
    });
  });
  describe("когда настройки в рублях",()=>{

    const defaultSettingsFx: Partial<Record<FieldNames, SettingItem>> = {
      "Вознагр. за орг.перевозки": { unit: "RUB", value: VALUE_IN_SETTINGS },
    };    
    it("возвращает результат конвертации",()=>{
      const { "Вознагр. за орг.перевозки": a = VALUE_WHEN_DEFAULT } = convertSettingsToCurrency(defaultSettingsFx, "", services);
      expect(a).toBe(VALUE_FROM_CHANGE_CURRENCY);
    })
  })
})