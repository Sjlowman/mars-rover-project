// Type definitions for [~MARS ROVER~] [~Version 1~]
// Project: [~Mars Rover~]
// Definitions by: [~SL~]
/*~ This is the global-modifying module template file. You should rename it to index.d.ts
 *~ and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for "super-greeter", this
 *~ file should be 'super-greeter/index.d.ts'
 */
/*~ Note: If your global-modifying module is callable or constructable, you'll
 *~ need to combine the patterns here with those in the module-class or module-function
 *~ template files
 */
export {};

declare global {
  /*~ Here, declare things that go in the global namespace, or augment
   *~ existing declarations in the global namespace
   */

  type PositiveNumber = number & { __type: "PositiveNumber" };

  type Grid = { x: number; y: number };

  type COMPASS_DIRECTIONS = ["N", "E", "S", "W"];
  //type CompassDirection = (typeof COMPASS_DIRECTIONS)[number];
  type NORTH = "N";
  type EAST = "E";
  type SOUTH = "S";
  type WEST = "W";
  type CompassDirections = NORTH | SOUTH | EAST | WEST;
  /*  Need to come back and implement this
  type CurrentRoverPosition = {
    x: number;
    y: number;
    aspect: CompassDirections;
  };*/

  type CurrentRoverPosition = {
    x: number;
    y: number;
    aspect: string;
  };
  type MOVEMENT_DIRECTIONS = ["W", "A", "S", "D"];
  //  type ALLOWABLE_FILE_INSTRUCTIONS = ["M", "L", "R"];
  type MOVE = "M";
  type LEFT = "L";
  type RIGHT = "R";
  type possibleDirections = MOVE | LEFT | RIGHT;
}
/*
  ~ If your module exports types or values, write them as usual
  export interface StringFormatOptions {
    fancinessLevel: number;
  }
  ~ For example, declaring a method on the module (in addition to its global side effects)
  export function doSomething(): void; */
