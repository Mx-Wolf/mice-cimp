
export interface CalcImportProps {

  // Стоимость по инвойсу
  ImpInvoceToBePaid: number;
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
  // Страховка
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
  // Вознагр. за орг.перевозки
  impCustomsClearance: number;
  // Разница НДС к уплате
  // ИТОГО РАСХОДЫ:
  // Налог на Прибыль СТ
  // Наценка СаенсТехнолоджи 
  agentAmount: number;
  // Наценка СТ в %
  agentRate: number;
  // Нужно заплатить с ПТС min:
  payAgentMin: number;
  // Сумма спецификации СТ>ПТС
  payAgentPlan: number;
  // ИТОГО ЗАТРАТЫ ДЛЯ ПТС:
  agentFee: number;
  // ЗАТРАТЫ В %:
  agentFeeRate: number;

}