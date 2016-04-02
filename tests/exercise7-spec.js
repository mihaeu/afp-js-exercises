"use strict";
describe("Exercise 7", () => {
  it("square", () => {
    let List = require("../src/exercise1").List;
    let list = List.fromArray([3, -1, 6]);
    let funcs = require("../src/exercise7");
    expect(funcs.square(list)).toEqual(List.fromArray([9, 1, 36]));
  });
});
