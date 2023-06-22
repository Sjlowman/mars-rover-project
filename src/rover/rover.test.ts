import { processEachInstruction } from "../rover/roverProcessInstructions";
describe("test parse function", () => {
  it("should return [1,2] if it receives '1 2 N' and M", () => {
    expect(
      processEachInstruction(
        {
          x: 1,
          y: 2,
          aspect: "N",
        },
        "M"
      )
    ).toEqual({
      x: 1,
      y: 3,
      aspect: "N",
    });
  });
});
