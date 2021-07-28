import { CalcImpServices } from "./services";

export interface CalcImportProps {

  // Стоимость по инвойсу
  impInvoceToBePaid: number;
  currency: string;
  // КУРС:
  currencyRate: number;
  // Вариант новый:
  // Оплата инвойса
  // Комиссия покуп. Валюты
  bankCurrencyExchangeFee: number;
  // Комиссия за вал. Контр.
  bankComplianceFee: number;
  // Комиссия за перевод
  bankWireTransferFee: number;
  // Транспорт Завод-Пост
  impDelivery: number;
  // Транспорт Пост-Склад
  domDelivery: number;
  // Страховка
  impInsuranceRate?: number | undefined;
  impInsurance: number;
  // Таможенные сборы
  impCustomsFee: number;
  // Таможенная пошлина
  impCustomsDutyRate: number;
  impCustomsDuty: number;
  impCustomsAmount: number;
  // Оплата НДС на таможне
  impCustomsNDSRate: number;
  impCustomsNDS: number;
  // свх (хранение)
  impBondedStorageFee: number
  // оформление ГТД
  impCustomsDeclaration: number;
  // ДС и сертификаты
  impDsCertificates: number;
  // Вознагр. за орг.перевозки
  impCustomsClearance: number;
  // ИТОГО РАСХОДЫ:
  // Наценка СаенсТехнолоджи 
  agentAmount: number;
  // Наценка СТ в %
  agentRate: number;
  // Нужно заплатить с ПТС min:
  payAgentMin: number;
  // Сумма спецификации СТ>ПТС
  payAgentPlan: number;
  // Разница НДС к уплате
  payAgentNDS: number;
  // Налог на Прибыль СТ
  agentIncomeTax: number;
  agentExpensesWoNDS: number;
  agentIncomeWoNDS: number;
  // ИТОГО ЗАТРАТЫ ДЛЯ ПТС:
  agentFee: number;
  // ЗАТРАТЫ В %:
  agentFeeRate: number;
}

export type CalcImportRequestProps = Pick<CalcImportProps,
  "payAgentPlan" |
  "impInvoceToBePaid" |
  "currencyRate" |
  "domDelivery" |
  "impDelivery" |
  "impCustomsDutyRate" |
  "impDsCertificates" |
  "agentRate" |
  "impInsuranceRate" |
  "currency">;
export interface ValidationDetails {
  status?: string | undefined;
  errors: Partial<Record<keyof CalcImportProps, string>>;
}
export interface CalcDetails extends ValidationDetails {
  results: CalcImportProps;
}
export type CalcImport = (props: CalcImportRequestProps, services: CalcImpServices) => CalcDetails;