import { parseInitialPosition } from "../rover/roverProcessInstructions";
xdescribe("test parse function", () => {
  it("should return [1,2] if it receives '1 2 N'", () => {
    expect(parseInitialPosition("1 2 N")).toBe([1, 2]);
  });
});
