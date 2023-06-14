export const COMPASS_DIRECTIONS = ["N", "E", "S", "W"] as const;

// ⚠️ It can be very useful to make a custom type based on the contents of an array

// 👉 Hover 'Hole' in the below line and see that it's defined as
// 		the union of whatever is in the 'HOLES' array
export type CompassDirection = (typeof COMPASS_DIRECTIONS)[number];
