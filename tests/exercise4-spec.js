"use strict";
describe("Exercise 4", () => {
  it("fibonacci with 0", () => expect(require("../src/exercise4").fib(0)).toBe(0));
  it("fibonacci with 1", () => expect(require("../src/exercise4").fib(1)).toBe(1));
  it("fibonacci with 6", () => expect(require("../src/exercise4").fib(6)).toBe(8));
  it("fibonacci with 7", () => expect(require("../src/exercise4").fib(7)).toBe(13));
});
