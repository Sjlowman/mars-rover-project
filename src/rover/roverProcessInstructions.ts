export function processEachInstruction(
  currentPosition: CurrentRoverPosition,
  instruction: possibleDirections
): CurrentRoverPosition {
  if (instruction === "M") {
    return findNextLocation(currentPosition);
  } else {
    return findNextDirection(currentPosition, instruction);
  }
}

function findNextLocation(
  currentPosition: CurrentRoverPosition
): CurrentRoverPosition {
  currentPosition.aspect === "N"
    ? (currentPosition.y += 1)
    : currentPosition.aspect === "E"
    ? (currentPosition.x += 1)
    : currentPosition.aspect === "S"
    ? (currentPosition.y += -1)
    : currentPosition.aspect === "W"
    ? (currentPosition.x += -1)
    : currentPosition;

  return currentPosition;
}

function findNextDirection(
  currentPosition: CurrentRoverPosition,
  instruction: possibleDirections
): CurrentRoverPosition {
  currentPosition.aspect === "N" && instruction === "R"
    ? (currentPosition.aspect = "E")
    : currentPosition.aspect === "E" && instruction === "R"
    ? "S"
    : currentPosition.aspect === "S" && instruction === "R"
    ? "W"
    : currentPosition.aspect === "W" && instruction === "R"
    ? "N"
    : currentPosition.aspect === "N" && instruction === "L"
    ? "W"
    : currentPosition.aspect === "E" && instruction === "L"
    ? "N"
    : currentPosition.aspect === "S" && instruction === "L"
    ? "E"
    : currentPosition.aspect === "W" && instruction === "L"
    ? "S"
    : currentPosition.aspect;
  return currentPosition;
}
