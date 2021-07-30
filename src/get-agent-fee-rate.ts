import { CalcImportProps, CalcImportRequestProps } from "./calc-imp-props";

export const getAgentFeeRate = (buffer: Pick<CalcImportProps, "agentFee">, props: Pick<CalcImportRequestProps, "impInvoceToBePaid">): number => {
  const { impInvoceToBePaid } = props;
  const { agentFee } = buffer;
  if (typeof impInvoceToBePaid === "undefined") {
    throw new Error("impInvoceToBePaid");
  }
  if(typeof agentFee === "undefined"){
    throw new Error("agentFee");
  }
  return agentFee / impInvoceToBePaid;
}