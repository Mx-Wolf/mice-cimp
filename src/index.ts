import { FieldNames } from "./calc-imp-props"
import { CalcImpServices } from "./services"
import { convertSettingsToCurrency } from "./convert-to-currency";
import { defaultSettingsFx } from "./consts";
import { calcBankBuyCurrencyFee } from "./calc-bank-buy-currency-fee";
import { calcBankComplianceFee } from "./calc-bank-compliance-fee";
import { calcBankWireTransferFee } from "./calc-bank-wire-transfer-fee";
import { calcInsurance } from "./calc-insurance";
import { calcCustomsDuty } from "./calc-customs-duty";
import { calcCustomsPaidNDS } from "./calc-customs-paid-nds";
import { calcCustomsFees } from "./calc-customs-fees";
import { sum } from "./add-parts";

export const computeMinAgentPay = (currency: string, input: Partial<Record<FieldNames, number>>, services: CalcImpServices): Partial<Record<FieldNames, number>> => {
  const buffer: Partial<Record<FieldNames, number>> = {
    ...convertSettingsToCurrency(defaultSettingsFx, currency, services),
    ...input
  };
  buffer["Комиссия покуп. Валюты"] = calcBankBuyCurrencyFee(currency, buffer, services);
  buffer["Комиссия за вал. Контр."] = calcBankComplianceFee(currency, buffer, services);
  buffer["Комиссия за перевод"] = calcBankWireTransferFee(currency, buffer, services);
  buffer["Страховка"] = calcInsurance(
    [
      buffer["Стоимость по инвойсу"],
      buffer["Транспорт Завод-Пост"],
    ],
    buffer);
  buffer["Таможенная пошлина"] = calcCustomsDuty(
    [
      buffer["Стоимость по инвойсу"],
      buffer["Транспорт Завод-Пост"],
      buffer["Страховка"],
    ],
    buffer,
  );
  buffer["Оплата НДС на таможне"] = calcCustomsPaidNDS(
    [
      buffer["Стоимость по инвойсу"],
      buffer["Транспорт Завод-Пост"],
      buffer["Страховка"],
      buffer["Таможенная пошлина"],
    ],
    buffer,
  );
  buffer["Таможенные сборы"] = calcCustomsFees(
    currency,
    [
      buffer["Стоимость по инвойсу"]
    ],
    services,
  );
  buffer["ИТОГО РАСХОДЫ:"] = sum(
    [
      buffer["Вознагр. за орг.перевозки"],
      buffer["ДС и сертификаты"],
      buffer["Комиссия за вал. Контр."],
      buffer["Комиссия за перевод"],
      buffer["Комиссия покуп. Валюты"],
      buffer["Оплата НДС на таможне"],
      buffer["Оформление ГТД"],
      buffer["СВХ (хранение)"],
      buffer["Стоимость по инвойсу"],
      buffer["Страховка"],
      buffer["Таможенная пошлина"],
      buffer["Таможенные сборы"],
      buffer["Транспорт Завод-Пост"],
      buffer["Транспорт Пост-Склад"],
    ],
  )
  throw new Error();
}