import { getAgentFee } from "./get-agent-fee"

describe("computation of the ИТОГО ЗАТРАТЫ ДЛЯ ПТС:",()=>{
  it("throws on undefined impInvoceToBePaid",()=>{
    expect(()=>getAgentFee({})).toThrow();
  });
  it("throws on undefined payAgentMin",()=>{
    expect(()=>getAgentFee({impInvoceToBePaid:100})).toThrow();
  });
  it("substract impInvoceToBePaid from payAgentMin", ()=>{
    const result = getAgentFee({impInvoceToBePaid:51, payAgentMin:100});
    expect(result).toBe(49);
  })
})