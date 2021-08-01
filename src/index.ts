import { CalcDetails } from "./calc-imp-props";
import { CalcImpServices } from "./services";
import { reduceCalcDetailsError, reduceErrors } from "./reduce-errors";
import { BASE_CURRENCY, BONDED_STORAGE_AND_DECLARATION, BONDED_STORAGE_CURRENCY, COMPENSATION_AMOUNT, COMPENSATION_CURRENCY, ErrorMessages } from "./consts";

export const calcImport = (props: CalcDetails, services: CalcImpServices): CalcDetails => {
  let {
    errors,
    status,
    results: {
      agentAmount: c23 = 0,
      agentExpensesWoNDS: h21 = 0,
      projectPrincipalExpenses: c26 = 0,
      projectOverhead: c27 = 0,
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
      impCustomsAmount: c14_1 = 0,
      impCompensation: c19 = 0,
      impCustomsDeclaration: c17 = 0,
      impCustomsDuty: c14 = 0,
      impCustomsDutyRate: c14_0 = 0,
      impCustomsFee: c13 = 0,
      impCustomsNDSBase: c15_1 = 0,
      impCustomsNDS: c15 = 0,
      impCustomsNDSRate: c15_0 = 0,
      impDelivery: c10 = 0,
      impDsCertificates: c18 = 0,
      impInsurance: c12 = 0,
      impInsuranceRate: c12_0 = 0,
      impInvoceToBePaid: c02 = 0,
      agentPayMin: c25 = 0,
      diffNDS: c20 = 0,
      agentPayPlan: c01 = 0,
      agentPayPlanNDS: h17 = 0,
      agentPayPlanNDSRate: h17_0 = 0,
      projectExpenses: c21 = 0,
      agentIncomeTaxMin: c22_0 = 0,
      agentIncomeTaxRate: c22_1 = 0,
    }
  } = props;

  if (!(c01 > 0)) {
    return reduceCalcDetailsError(props, { agentPayPlan: ErrorMessages.PAY_AGENT_PLAN });
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
  c13 = services.getImpCustomsFee(target);
  c14_1 = c02 + c10 + c12;
  c14 = c14_0 * c14_1;
  c15_1 = c14_1 + c14;
  c15 = c15_1 * c15_0;
  c16 = 0.5 * services.changeCurrency(
    {
      amount: BONDED_STORAGE_AND_DECLARATION,
      currency: BONDED_STORAGE_CURRENCY,
    },
    currency,
  );
  c17 = c16;
  c19 = services.changeCurrency({ amount: COMPENSATION_AMOUNT, currency: COMPENSATION_CURRENCY }, currency)
  h17 = c01 * h17_0;

  const d15 = services.changeCurrency({ amount: c15, currency }, BASE_CURRENCY);
  const d20 = h17 - d15;
  c20 = services.changeCurrency({ amount: d20, currency: BASE_CURRENCY }, currency);

  c21 = [
    c02,
    c07,
    c08,
    c09,
    c10,
    c11,
    c12,
    c13,
    c14,
    c15,
    c16,
    c17,
    c18,
    c19
  ].reduce((a, b) => a + b);

  c23 = c21 * c24;
  c25 = c23 + c21;

  c26 = c25 - c02;
  h17 = c25 * h17_0;
  h20 = c25 - h17;
  h21 = c21 - c15;

  const h23 = h20 - h21;
  c22 = h23 * c22_1;
  c27 = c26 / c02;
  return {
    errors: {},
    status: undefined,
    results: {
      agentAmount: c23,
      agentExpensesWoNDS: h21,
      agentIncomeTax: c22,
      agentIncomeTaxMin: -1,
      agentIncomeTaxRate: c22_1,
      agentIncomeWoNDS: h20,
      agentPayMin: c25,
      agentPayPlan: c01,
      agentPayPlanNDS: h17,
      agentPayPlanNDSRate: h17_0,
      agentRate: c24,
      bankComplianceFee: c08,
      bankCurrencyExchangeFee: c07,
      bankWireTransferFee: c09,
      currency,
      currencyRate: c03,
      diffNDS: c20,
      domDelivery: c11,
      impBondedStorageFee: c16,
      impCompensation: c19,
      impCustomsAmount: c14_1,
      impCustomsDeclaration:c17,
      impCustomsDuty: c14,
      impCustomsDutyRate: c14_0,
      impCustomsFee: c13,
      impCustomsNDS: c15,
      impCustomsNDSBase: c15_1,
      impCustomsNDSRate: c15_0,
      impDelivery: c10,
      impDsCertificates:c18,
      impInsurance:c12,
      impInsuranceRate: c12_0,
      impInvoceToBePaid: c02,
      projectExpenses:c21,
      projectOverhead: c27,
      projectPrincipalExpenses: c26,
    }
  };
}