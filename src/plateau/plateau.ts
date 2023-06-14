/* Need to complete this, not currently checking properly, problem with how I implement it  receiving two variables) */
type PositiveNumber = number & { __type: "PositiveNumber" };
function assertsPositiveNumber(value: number): asserts value is PositiveNumber {
  if (value < 0) throw new Error("Value must be a positive number");
}
export function allocatePlateauSize(
  x: PositiveNumber,
  y: PositiveNumber
): string {
  return "Plateau max boundary set";
}
