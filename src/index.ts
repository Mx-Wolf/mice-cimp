import { CalcDetails } from "./calc-imp-props";
import { CalcImpServices } from "./services";
import { reduceCalcDetailsError, reduceErrors } from "./reduce-errors";
import { ErrorMessages } from "./consts";

export const calcImport = (props: CalcDetails, services: CalcImpServices): CalcDetails => {
  let {
    errors,
    status,
    results: {
      agentAmount: c23 = 0,
      agentExpensesWoNDS: h21 = 0,
      agentFee: c26 = 0,
      agentFeeRate: c27 = 0,
      agentIncomeTax: c22 = 0,
      agentIncomeWoNDS: h20 = 0,
      agentRate: c24 = 0,
      bankComplianceFee: c08 = 0,
      bankCurrencyExchangeFee: c07 = 0,
      bankWireTransferFee: c09 = 0,
      currency,
      currencyRate: c03 = 0,
      domDelivery: c11 = 0,
      impBondedStorageFee: c16 = 0,
      impCustomsAmount: с14_0 = 0,
      impCustomsClearance: c19 = 0,
      impCustomsDeclaration: c17 = 0,
      impCustomsDuty: c14 = 0,
      impCustomsDutyRate: c14_0 = 0,
      impCustomsFee: c13 = 0,
      impCustomsNDS: c15 = 0,
      impCustomsNDSRate: c15_0 = 0,
      impDelivery: c10 = 0,
      impDsCertificates: c18 = 0,
      impInsurance: c12 = 0,
      impInsuranceRate: c12_0 = 0,
      impInvoceToBePaid: c02 = 0,
      payAgentMin: c25 = 0,
      payAgentNDS: c20 = 0,
      payAgentPlan: c01 = 0,
    }
  } = props;

  if (!(c01 > 0)) {
    return reduceCalcDetailsError(props, { payAgentPlan: ErrorMessages.PAY_AGENT_PLAN });
  }

  if (!(c02 > 0)) {
    return reduceCalcDetailsError(props, { impInvoceToBePaid: ErrorMessages.AMOUNT_TO_BE_PAID });
  }

  if (typeof currency === "undefined") {
    return reduceCalcDetailsError(props, { currency: ErrorMessages.CURRENCY_EXPECTED });
  }

  if (!(c03 > 0)) {
    c03 = services.currencyRate(currency);
  }
  const target = { amount: c02, currency };

  c07 = services.getBankCurrencyExchangeFee(target);
  c08 = services.getBankComplianceFee(target);
  c09 = services.getBankWireTransferFee(target);

  if (c12_0 <= 0) {
    c12_0 = services.getImpInsuranceRate()
  }
  c12 = (c02 + c10) * c12_0;
  if()

  throw new Error();
}