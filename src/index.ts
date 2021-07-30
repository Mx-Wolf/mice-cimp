import { CalcDetails } from "./calc-imp-props";
import { CalcImpServices } from "./services";
import { calcAgentFee } from "./calc-agent-fee";
import { getAgentFeeRate } from "./get-agent-fee-rate"

export const calcImport = (props: CalcDetails, services: CalcImpServices): CalcDetails => {
  const { errors, status, results } = calcAgentFee(props, services);
  return {
    errors,
    status,
    results: {
      ...results,
      agentFeeRate: getAgentFeeRate(results, props.results)
    }
  }

}