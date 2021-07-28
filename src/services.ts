export interface Value {
  currency: string;
  amount: number;
}
export interface CalcImpServices {
  changeCurrency: (from: Value, to: string) => Value;
  getBankCurrencyExchangeFee: (target: Value) => Value;
  getBankComplianceFee: () => Value;
  getBankWireTransferFee: (target: Value) => Value;
  getImpInsuranceRate: () => number;
  getAgentRate: () => number;
  getImpCustomsFee: (value: number) => number;
}