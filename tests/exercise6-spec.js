"use strict";
describe("Exercise 6", () => {
  it("sum", () => {
    let list = require("../src/exercise1").List.fromArray([3, -1, 6]);
    let funcs = require("../src/exercise6");
    expect(funcs.sum(list)).toBe(8);
  });

  it("average", () => {
    let list = require("../src/exercise1").List.fromArray([3, 9, 6]);
    let funcs = require("../src/exercise6");
    expect(funcs.avg(list)).toBe(6);
  });
});
