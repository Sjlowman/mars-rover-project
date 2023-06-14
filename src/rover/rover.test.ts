import { processEachInstruction } from "../rover/roverProcessInstructions";
describe("test parse function", () => {
  it("should return [1,2] if it receives '1 2 N'", () => {
    expect(
      processEachInstruction(
        {
          gridLocation: [1, 2],
          aspect: "N",
        },
        "M"
      )
    ).toStrictEqual({
      gridLocation: [1, 2],
      aspect: "N",
    });
  });
});
