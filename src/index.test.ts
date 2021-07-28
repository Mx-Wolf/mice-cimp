import { calcImport } from "./index";
import {helper} from "./second";
jest.mock("./second",()=>({helper:jest.fn()}));
beforeEach(()=>jest.resetAllMocks());
describe("main interface for the algo",()=>{
  it("runs",()=>{
    expect(()=>calcImport()).not.toThrow();
    expect(helper).toBeCalled()
  })
});