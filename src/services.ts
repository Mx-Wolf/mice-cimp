export interface Value {
  currency: string;
  amount: number;
}
export interface CalcImpServices {
  changeCurrency: (from: Value, to: string) => Value;
  currencyRate: (currency: string) => number;
  getBankCurrencyExchangeFee: (target: Value) => number;
  getBankComplianceFee: (target: Value) => number;
  getBankWireTransferFee: (target: Value) => number;
  getImpInsuranceRate: () => number;
  getAgentRate: () => number;
  getImpCustomsFee: (value: number) => number;
}