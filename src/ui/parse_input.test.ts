import { parseRoverInitialPositionInput } from "../ui/parse_input";
describe("test add function", () => {
  it("should return [1,2] if it receives '1 2 N'", () => {
    expect(parseRoverInitialPositionInput("1 2 N")).toStrictEqual([1, 2]);
  });
});
