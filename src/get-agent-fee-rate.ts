import { CalcImportProps, CalcImportRequestProps } from "./calc-imp-props";

export const getAgentFeeRate = (buffer: Partial<Pick<CalcImportProps, "agentFee">>, props: Pick<CalcImportRequestProps, "impInvoceToBePaid">|undefined): number => {
  if(typeof props === "undefined"){
    throw new Error("argument props")
  }
  const { impInvoceToBePaid } = props;
  const { agentFee } = buffer;
  if (typeof impInvoceToBePaid === "undefined") {
    throw new Error("impInvoceToBePaid");
  }
  if(typeof agentFee === "undefined"){
    throw new Error("agentFee");
  }
  if(impInvoceToBePaid <=0){
    throw new Error("invalid impInvoceToBePaid");
  }
  return agentFee / impInvoceToBePaid;
}