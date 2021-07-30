import { calcAgentFee } from "./calc-agent-fee";
import { getAgentFeeRate } from "./get-agent-fee-rate";
import { calcImport } from "./index";
import { CalcImportRequestProps } from "./calc-imp-props";
import { CalcImpServices } from "./services";


jest.mock("./calc-agent-fee", () => ({ calcAgentFee: jest.fn() }));
jest.mock("./get-agent-fee-rate", () => ({ getAgentFeeRate: jest.fn() }))

beforeEach(() => jest.resetAllMocks());
describe("main interface for the algo", () => {
  it("runs", () => {
    const props: CalcImportRequestProps = {};
    const services: CalcImpServices = <CalcImpServices>{};
    (<jest.Mock>calcAgentFee).mockReturnValue({});
    (<jest.Mock>getAgentFeeRate).mockReturnValueOnce(42);
    const result = calcImport(props, services);
    expect(calcAgentFee).toBeCalled();
    expect(getAgentFeeRate).toBeCalled();
    expect(result.results.agentFeeRate).toBe(42);
  })
});