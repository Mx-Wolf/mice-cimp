import { CalcImportProps } from "./calc-imp-props";

export const getAgentFee = (buffer: Partial<Pick<CalcImportProps, "payAgentMin" | "impInvoceToBePaid">>): number => {
  const { payAgentMin, impInvoceToBePaid } = buffer;
  if (typeof payAgentMin === "undefined") {
    throw new Error("payAgentMin");
  }
  if (payAgentMin <= 0) {
    throw new Error("zero payAgentMin");
  }
  if (typeof impInvoceToBePaid === "undefined") {
    throw new Error("impInvoceToBePaid");
  }
  if (impInvoceToBePaid <= 0) {
    throw new Error("zero impInvoceToBePaid");
  }
  return payAgentMin - impInvoceToBePaid;
}