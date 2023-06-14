import { CompassDirection, COMPASS_DIRECTIONS } from "./parseInputTypes";
export function parseRoverInitialPositionInput(
  input: string
): Grid | undefined {
  const xPosition: number = parseInt(input.charAt(0));
  const yPosition: number = parseInt(input.charAt(2));

  // now we verify it's valid
  if (isNaN(xPosition) || isNaN(yPosition)) {
    return undefined;
  }

  if (xPosition < 1 || yPosition < 1) {
    return undefined;
  }
  const roverStartPosition: Grid = [0, 0];
  roverStartPosition.splice(0, 1, xPosition);
  roverStartPosition.splice(1, 1, yPosition);
  // we know the input is valid so we can return a Grid position
  return roverStartPosition;
}

export function parseRoverInitialAspectInput(
  input: string
): CompassDirection | undefined {
  const roverInitialAspect = input.substring(4, 5);
  const aspectMap = ["N", "E", "S", "W"];

  // now we verify it's valid

  // we know the input is valid so we can return a Hole
  return COMPASS_DIRECTIONS[aspectMap.indexOf(roverInitialAspect)];
}
