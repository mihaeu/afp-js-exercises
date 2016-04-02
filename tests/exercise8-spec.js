"use strict";
describe("Exercise 8", () => {
  it("even", () => {
    let List = require("../src/exercise1").List;
    let list = List.fromArray([3, -1, 6, 10]);
    let funcs = require("../src/exercise8");
    expect(funcs.even(list)).toEqual(List.fromArray([6, 10]));
  });
});
