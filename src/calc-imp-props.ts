import { CalcImpServices } from "./services";

export interface CalcImportProps {

  /** Стоимость по инвойсу, Оплата инвойса c02*/
  impInvoceToBePaid: number;
  currency: string;

  /** КУРС:*/
  currencyRate: number;
  // Вариант новый:

  /**  Комиссия покуп. Валюты c07*/
  bankCurrencyExchangeFee: number;
  /**Комиссия за вал. Контр. c08*/
  bankComplianceFee: number;
  /**Комиссия за перевод c09*/
  bankWireTransferFee: number;
  /**Транспорт Завод-Пост c10*/
  impDelivery: number;
  /**Транспорт Пост-Склад c11*/
  domDelivery: number;
  /** ставка Страховка*/
  impInsuranceRate?: number | undefined;
  /** Страховка с12 */
  impInsurance: number;
  /**Таможенные сборы c13*/
  impCustomsFee: number;
  /**ставка Таможенная пошлина*/
  impCustomsDutyRate: number;
  /** Таможенная пошлина с14*/
  impCustomsDuty: number;
  /** Таможенная стоимость со сборами */
  impCustomsAmount: number;
  /** ставка НДС на таможне*/
  impCustomsNDSRate: number;
  /** сумма для вычисления НДС */
  impCustomsNDSBase: number;
  /**Ндс на таможне */
  impCustomsNDS: number;
  /**свх (хранение) c16*/
  impBondedStorageFee: number
  /**оформление ГТД c17 */
  impCustomsDeclaration: number;
  /**ДС и сертификаты c18*/
  impDsCertificates: number;
  /** Вознагр. за орг.перевозки c19*/
  impCompensation: number;
  // ИТОГО РАСХОДЫ:
  /**Наценка СаенсТехнолоджи C23 */
  agentAmount: number;
  /** Наценка СТ в % c24*/
  agentRate: number;

  /** Нужно заплатить с ПТС min: c25*/
  agentPayMin: number;
  /**Сумма спецификации СТ>ПТС c01 */
  agentPayPlan: number;
  /**Ставка НДС для агента h17_0*/
  agentPayPlanNDSRate: number;
  /**НДС к уплате H17 */
  agentPayPlanNDS: number;

  /**Разница НДС к уплате*/
  diffNDS: number;
  /**Ставка налога на прибыль агента */
  agentIncomeTaxRate: number;
  /**Налог на Прибыль СТ: C22*/
  agentIncomeTax: number;
  agentIncomeTaxMin: number;
  /** Затраты до НДС H21*/
  agentExpensesWoNDS: number;
  /** Продажа до НДС H20*/
  agentIncomeWoNDS: number;
  /** ИТОГО ЗАТРАТЫ ДЛЯ ПТС: C26*/
  projectPrincipalExpenses: number;
  /**ЗАТРАТЫ В %: C27*/
  projectOverhead: number;
  /**ИТОГО РАСХОДЫ: C21*/
  projectExpenses: number;
}

export type CalcImportRequestProps = Partial<Pick<CalcImportProps,
  "agentRate" |
  "currency" |
  "currencyRate" |
  "domDelivery" |
  "impCustomsDutyRate" |
  "impDelivery" |
  "impDsCertificates" |
  "impInsuranceRate" |
  "impInvoceToBePaid" |
  "agentPayPlan"
>>;
export type ErrorRecord = Partial<Record<keyof CalcImportProps, string>>;
export interface ValidationDetails {
  status?: string | undefined;
  errors: ErrorRecord;
}
export interface CalcDetails extends ValidationDetails {
  results: Partial<CalcImportProps>;
}
export type CalcImport = (props: CalcImportRequestProps, services: CalcImpServices) => CalcDetails;
export type AgentFeeResult = ValidationDetails & { results: Omit<CalcImportProps, "agentFeeRate"> };
export type PayAgentMinResult = ValidationDetails & { results: Omit<AgentFeeResult["results"], "agentFee"> };

export type FieldNames = 
"Стоимость по инвойсу" |
"Курс" |
"Транспорт Завод-Пост" |
"Транспорт Пост-Склад" |
"СВХ (хранение)" |
"Вознагр. за орг.перевозки" |
"ДС и сертификаты" |
"Наценка СТ" |
"Ставка НДС" |
"Ставка Страховка" |
"Ставка Таможенные сборы" |
"Ставка Таможенная пошлина" |
"Ставка Налог на прибыль";

