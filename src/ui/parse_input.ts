import { CompassDirection, COMPASS_DIRECTIONS } from "./parseInputTypes";
enum CompassDirs {
  NORTH = "N",
  SOUTH = "S",
  EAST = "E",
  WEST = "W",
}

export function parseRoverInitialPositionInput(
  input: string
): CurrentRoverPosition | undefined {
  const xPosition: number = parseInt(input.charAt(0));
  const yPosition: number = parseInt(input.charAt(2));

  // now we verify it's valid
  if (isNaN(xPosition) || isNaN(yPosition)) {
    return undefined;
  }

  if (xPosition < 1 || yPosition < 1) {
    return undefined;
  }
  const aspectToValidate = input.substring(4, 5);
  const aspectMap = ["N", "E", "S", "W"];
  if (
    aspectToValidate === "N" ||
    aspectToValidate === "E" ||
    aspectToValidate === "S" ||
    aspectToValidate === "W"
  ) {
    //const roverInitialAspect =
    // ;
    // we know the input is valid so we can return a Grid position
    //const CurrentRoverPosition.x = xPosition;
    //roverStartPosition.splice(0, 1, xPosition);
    //roverStartPosition.splice(1, 1, yPosition);

    return { x: xPosition, y: yPosition, aspect: aspectToValidate };
  } else return undefined; // roverStartPosition;
}

export function parseRoverInitialAspectInput(
  input: string
): CompassDirection | undefined {
  const roverInitialAspect = input.substring(4, 5);
  const aspectMap = ["N", "E", "S", "W"];

  return COMPASS_DIRECTIONS[aspectMap.indexOf(roverInitialAspect)];
}
