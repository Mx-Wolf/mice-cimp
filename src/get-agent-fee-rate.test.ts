import { getAgentFeeRate } from "./get-agent-fee-rate";

describe("agent fee percentage computation",()=>{
  it("throws on undefined impInvoceToBePaid",()=>{
    const props = {};
    const buffer = {};
    expect (()=>getAgentFeeRate(buffer,props)).toThrow();
  });
  it("throws on when agentFee is not ready",()=>{
    const props = {impInvoceToBePaid:100};
    const buffer = {};
    expect(()=>getAgentFeeRate(buffer,props)).toThrow();
  });
  it("throws on negative value impInvoceToBePaid",()=>{
    const props={impInvoceToBePaid:-100};
    const buffer={agentFee:0};
    expect(()=>getAgentFeeRate(buffer,props)).toThrow()
  });
  it("throws on zero value impInvoceToBePaid",()=>{
    const props={impInvoceToBePaid:0};
    const buffer={agentFee:0};
    expect(()=>getAgentFeeRate(buffer,props)).toThrow()
  });
  it("compute fraction", ()=>{
    const props = {impInvoceToBePaid:100};
    const buffer = {agentFee:100};
    const result = getAgentFeeRate(buffer,props);
    expect(result).toBe(1);
  })
})