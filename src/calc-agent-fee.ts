import { CalcDetails } from "./calc-imp-props"
import { CalcImpServices } from "./services";
import { calcPayAgentMin } from "./calc-pay-agent-min";
import { getAgentFee } from "./get-agent-fee";


export const calcAgentFee = (props: CalcDetails, services: CalcImpServices): CalcDetails => {
  try {
    const { errors, status, results } = calcPayAgentMin(props, services);
    return {
      errors,
      status,
      results: {
        ...results,
        agentFee: getAgentFee(results, props.results),
      }
    }
  } catch (err) {
    return {
      ...props,
      errors: {
        ...props.errors,
        agentFee: err.message,
      },
    }
  }
}