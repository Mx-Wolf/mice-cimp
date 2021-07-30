import { CalcImportProps } from "./calc-imp-props";

export const getAgentFeeRate = (buffer: Partial<Pick<CalcImportProps, "agentFee" | "impInvoceToBePaid">>): number => {


  const { agentFee, impInvoceToBePaid } = buffer;
  if (typeof impInvoceToBePaid === "undefined") {
    throw new Error("impInvoceToBePaid");
  }
  if (typeof agentFee === "undefined") {
    throw new Error("agentFee");
  }
  if (impInvoceToBePaid <= 0) {
    throw new Error("invalid impInvoceToBePaid");
  }
  return agentFee / impInvoceToBePaid;
}