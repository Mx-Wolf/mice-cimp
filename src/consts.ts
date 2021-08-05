import { FieldNames } from "./calc-imp-props";

export const ErrorMessages = {
  AMOUNT_TO_BE_PAID: "AMOUNT_TO_BE_PAID",
  PAY_AGENT_PLAN: "PAY_AGENT_PLAN",
  CURRENCY_EXPECTED: "CURRENCY_EXPECTED",
}

export const BASE_CURRENCY = "RUR";

export const BONDED_STORAGE_AND_DECLARATION = 24000;
export const BONDED_STORAGE_CURRENCY = BASE_CURRENCY;
export const COMPENSATION_AMOUNT = 3500;
export const COMPENSATION_CURRENCY = BASE_CURRENCY;

interface SettingItem {
  unit: "RUB" | "CUR" | "FRAC";
  value: number;
}

export const DefaultSettingsFx: Partial<Record<FieldNames, SettingItem>> = {
  "Вознагр. за орг.перевозки": { unit: "RUB", value: 3500 },
  "ДС и сертификаты": { unit: "RUB", value: 0 },
  "Наценка СТ": { unit: "FRAC", value: 0.02 },
  "СВХ (хранение)": { unit: "RUB", value: 24000 },
  "Ставка НДС": { unit: "FRAC", value: 0.2 },
  "Ставка Налог на прибыль": { unit: "FRAC", value: 0.2 },
  "Ставка Страховка": {unit:"FRAC",value:0.0012},
  "Ставка Таможенная пошлина": {unit:"FRAC", value:0.05},
  "Ставка Таможенные сборы": {unit:"FRAC", value:0.00275},  
};
