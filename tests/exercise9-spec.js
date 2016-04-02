"use strict";

describe("Exercise 9", () => {
  it("caesar", () => expect(require("../src/exercise9").caesar("abc", 2)).toEqual("CDE"));
  it("caesar", () => expect(require("../src/exercise9").caesar("xyz", 2)).toEqual("ZAB"));
});
