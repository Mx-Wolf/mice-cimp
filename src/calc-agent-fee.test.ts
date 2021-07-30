import { calcAgentFee } from "./calc-agent-fee";
import { CalcImpServices } from "./services";
import { calcPayAgentMin } from "./calc-pay-agent-min";
import { getAgentFee } from "./get-agent-fee";

jest.mock("./calc-pay-agent-min", () => ({ calcPayAgentMin: jest.fn() }));
jest.mock("./get-agent-fee", () => ({ getAgentFee: jest.fn() }));

describe("computation of agent fee", () => {
  describe("when input is not valid", () => {
    it("registers error throw in error section", () => {
      (<jest.Mock>getAgentFee).mockImplementationOnce(() => { throw new Error("test") });
      (<jest.Mock>calcPayAgentMin).mockReturnValueOnce({});
      const result = calcAgentFee({ results: {}, errors: {} }, <CalcImpServices>{});
      expect(result.errors.agentFee).toBe("test");
      expect(calcPayAgentMin).toBeCalled();
      expect(getAgentFee).toBeCalled();
    })
  })
})