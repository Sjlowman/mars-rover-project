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
}
/*
  ~ If your module exports types or values, write them as usual
  export interface StringFormatOptions {
    fancinessLevel: number;
  }
  ~ For example, declaring a method on the module (in addition to its global side effects)
  export function doSomething(): void; */
