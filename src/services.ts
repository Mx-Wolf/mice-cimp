export interface Value {
  currency: string;
  amount: number;
}
export interface CalcImpServices {
  changeCurrency: (from: Partial<Value>, to: string) => number;
  currencyRate: (currency: string) => number;
  getBankCurrencyExchangeFee: (target: Partial<Value>) => Value;
  getBankComplianceFee: (target: Partial<Value>) => Value;
  getBankWireTransferFee: (target: Partial<Value>) => Value;
  getImpInsuranceRate: () => number;
  getAgentRate: () => number;
  getImpCustomsFee: (target:Value) => number;
}