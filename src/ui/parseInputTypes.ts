export const COMPASS_DIRECTIONS = ["N", "E", "S", "W"] as const;
export type CompassDirection = (typeof COMPASS_DIRECTIONS)[number];
