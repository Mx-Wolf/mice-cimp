import { CalcImportRequestProps, CalcImport, CalcDetails, ValidationDetails, CalcImportProps } from "./calc-imp-props";
import { CalcImpServices } from "./services";
import { checkImpInvoceToBePaice } from "./rules/check-imp-invoce-to-be-paid";
import { checkImpInsurance } from "./rules/check-imp-insurance-rate";
import { checkImpDelivery } from "./rules/check-imp-delivery";

export const calcImport: CalcImport = (props: CalcImportRequestProps, services: CalcImpServices): CalcDetails => {
  const validity: ValidationDetails = { errors: {} };
  const { impInvoceToBePaid, currency, impDelivery } = props;

  checkImpInvoceToBePaice({ impInvoceToBePaid }, validity);
  checkImpInsurance({ impInsuranceRate: props.impInsuranceRate }, validity);
  checkImpDelivery({ impDelivery }, validity);

  const getBankCurrencyExchangeFee = () => {
    const { amount } = services.getBankCurrencyExchangeFee({ amount: impInvoceToBePaid, currency });
    return amount;
  }
  const getBankComplianceFee = () => {
    const { amount } = services.getBankComplianceFee();
    return amount;
  }
  const getBankWireTransferFee = () => {
    const { amount } = services.getBankWireTransferFee({ amount: impInvoceToBePaid, currency });
    return amount;
  }
  const impInsuranceRate = props.impInsuranceRate || services.getImpInsuranceRate();

  const getImpInsurance = () => {
    return (impInvoceToBePaid + impDelivery) * impInsuranceRate;
  }

  const getImpCustomsFee = ()=>{
    
    services.
  }

  const result: CalcImportProps = {
    ...props,
    bankCurrencyExchangeFee: getBankCurrencyExchangeFee(),
    bankComplianceFee: getBankComplianceFee(),
    bankWireTransferFee: getBankWireTransferFee(),
    impInsuranceRate,
    impInsurance: getImpInsurance(),
    impCustomsFee: 
  };
  throw new Error();
}