import { allocatePlateauSize } from "../plateau/plateau";
type PositiveNumber = number & { __type: "PositiveNumber" };
function assertsPositiveNumber(value: number): asserts value is PositiveNumber {
  if (value < 0) throw new Error("Value must be a positive number");
}
describe("test setting the plateau size", () => {
  it("Should  return msg to say it's been set if it receives two positive integers", () => {
    expect(
      allocatePlateauSize(10 as PositiveNumber, -7 as PositiveNumber)
    ).toBe("Plateau max boundary set");
  });
});
