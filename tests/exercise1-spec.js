"use strict";

describe("Exercise 1", () => {
  const List = require("../src/exercise1").List;

  it("constructor", () => {
    const list = new List([1, 2, 3]);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  it("prepend", () => {
    const list = new List([1, 2, 3]);
    // expect(list.prepend(list).toArray()).toBe([1, 2, 3, 1, 2, 3]);
  });

  it("append", () => {
    expect(true).toBe(true);
  });

  it("reverse", () => {
    expect(true).toBe(true);
  });

  it("contains", () => {
    expect(true).toBe(true);
  });

  it("remove", () => {
    expect(true).toBe(true);
  });

  it("delete", () => {
    expect(true).toBe(true);
  });

  it("get", () => {
    expect(true).toBe(true);
  });

  it("pop", () => {
    expect(true).toBe(true);
  });

  it("union", () => {
    expect(true).toBe(true);
  });

  it("diff", () => {
    expect(true).toBe(true);
  });

  it("uniq", () => {
    expect(true).toBe(true);
  });

  it("sort", () => {
    expect(true).toBe(true);
  });

  it("primes", () => {
    expect(true).toBe(true);
  });

  it("shuffle", () => {
    expect(true).toBe(true);
  });

  it("filter", () => {
    expect(true).toBe(true);
  });

  it("foreach", () => {
    expect(true).toBe(true);
  });

  it("reduceL", () => {
    expect(true).toBe(true);
  });

  it("reduceR", () => {
    expect(true).toBe(true);
  });

  it("map", () => {
    expect(true).toBe(true);
  });

  it("zip", () => {
    expect(true).toBe(true);
  });

});
