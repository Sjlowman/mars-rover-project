import { parseRoverInitialPositionInput } from "../ui/parse_input";
import { parseRoverInitialAspectInput } from "../ui/parse_input";

describe("test initial position function", () => {
  it("should return [1,2] if it receives '1 2 N'", () => {
    expect(parseRoverInitialPositionInput("1 2 N")).toStrictEqual([1, 2]);
  });
});
describe("test initial aspect function", () => {
  it("should return N if it receives '1 2 N'", () => {
    expect(parseRoverInitialAspectInput("1 2 N")).toStrictEqual("N");
  });
  it("should return W if it receives '1 2 W'", () => {
    expect(parseRoverInitialAspectInput("1 2 W")).toStrictEqual("W");
  });
});
