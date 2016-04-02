"use strict";

describe("Exercise 1", () => {
  const List = require("../src/exercise1").List;

  it("constructor", () => {
    expect(new List()).toEqual(List.EMPTY);
    expect(List.EMPTY).toBe(List.EMPTY);
  });


  it("prependValue", () => {
    let list = List.EMPTY.prependValue(9).prependValue(7);
    expect(list).toEqual(new List(7, new List(9, List.EMPTY)));
  });

  it("prependList", () => {
    let list1 = List.fromArray([5, 6, 7]);
    let list2 = List.fromArray([1, 2, 3]);
    expect(list1.prependList(list2)).toEqual(List.fromArray([1, 2, 3, 5, 6, 7]));
    expect(list2.prependList(list1)).toEqual(List.fromArray([5, 6, 7, 1, 2, 3]));
  });

  it("appendValue", () => {
    let list = List.EMPTY.appendValue(9).appendValue(7);
    expect(list).toEqual(new List(9, new List(7, List.EMPTY)));
  });

  it("appendList", () => {
    let list1 = List.fromArray([5, 6, 7]);
    let list2 = List.fromArray([1, 2, 3]);
    expect(list1.appendList(list2)).toEqual(List.fromArray([5, 6, 7, 1, 2, 3]));
    expect(list2.appendList(list1)).toEqual(List.fromArray([1, 2, 3, 5, 6, 7]));
  });

  it("reverse", () => {
    let list1 = List.fromArray([1, 2, 3]);
    let list2 = List.fromArray([3, 2, 1]);
    expect(list1.reverse()).toEqual(list2);
  });

  it("contains", () => {
    expect(List.fromArray([5, 6, 7]).contains(7)).toBe(true);
    expect(List.fromArray([5, 6, 7]).contains(9)).toBe(false);
  });

  it("remove", () => {
    expect(List.fromArray([5, 6, 6, 7]).remove(6)).toEqual(List.fromArray([5, 7]));
    expect(List.fromArray([5, 6, 7]).remove(9)).toEqual(List.fromArray([5, 6, 7]));
  });

  it("delete", () => {
    expect(List.fromArray([5, 6, 7]).delete(1)).toEqual(List.fromArray([5, 7]));
    try {
      List.fromArray([1, 2, 3]).delete(99);
      fail();
    } catch (error) {
      expect(error.message).toEqual("Index out of bounds");
    }
  });

  it("get", () => {
    expect(List.fromArray([5, 6, 7]).get(2)).toBe(7);
    try {
      List.fromArray([5, 6, 7]).get(3);
      fail();
    } catch (error){
      expect(error.message).toEqual("No such element");
    }
  });

  it("pop", () => {
    expect(List.fromArray([1, 2, 3]).pop(2)).toEqual(List.fromArray([3, 1, 2]));
    try {
      List.fromArray([1, 2, 3]).pop(99);
      fail();
    } catch (error) {
      expect(error.message).toEqual("Index out of bounds");
    }
  });

  it("union", () => {
    let list1 = List.fromArray([5, 2, 7]);
    let list2 = List.fromArray([1, 2, 3]);
    expect(list1.union(list2)).toEqual(List.fromArray([5, 2, 7, 1, 3]));
  });

  it("diff", () => {
    let list1 = List.fromArray([5, 2, 7]);
    let list2 = List.fromArray([1, 2, 3]);
    expect(list1.diff(list2)).toEqual(List.fromArray([5, 7]));
  });

  it("uniq", () => {
    let list = List.fromArray([1, 2, 3, 3, 3, 4, 4]);
    expect(list.uniq()).toEqual(List.fromArray([1, 2, 3, 4]));
  });

  it("sort", () => {
    let list1 = List.fromArray([5, 2, 1, 1, 7]);
    expect(list1.sort()).toEqual(List.fromArray([1, 1, 2, 5, 7]));
  });

  it("primes", () => {
    // expect(List.primes(5)).toEqual(List.fromArray([1, 2, 3, 5, 7]));
  });

  it("shuffle", () => {
    expect(List.range(100).shuffle()).not.toEqual(List.range(100));
  });

  it("filter", () => {
    expect(List.fromArray([5, 2, 1, 1, 7]).filter(i => i === 1)).toEqual(List.fromArray([1, 1]));
    expect(List.fromArray([5, 2, 1, 1, 7]).filter(i => i % 2 !== 0)).toEqual(List.fromArray([5, 1, 1, 7]));
  });

  it("foreach", () => {
    let sum = 0;
    List.range(4).forEach(i => sum += i);
    expect(sum).toBe(6);
  });

  it("reduceL", () => {
    expect(List.range(4).reduceL((a, b) => a + b)).toBe(6);
    expect(List.range(4).reduceL((a, b) => a.toString() + b.toString())).toBe("0123");
  });

  it("reduceR", () => {
    expect(List.range(4).reduceR((a, b) => a + b)).toBe(6);
    expect(List.range(4).reduceR((a, b) => a.toString() + b.toString())).toBe("0123");
  });

  it("map", () => {
    expect(List.range(4).map(i => i * i)).toEqual(List.fromArray([0, 1, 4, 9]));
  });

  it("zip", () => {
    expect(List.range(10).zip((a, b) => a * b, List.range(20)))
      .toEqual(List.range(10).map(i => i * i));
  });

  it("range", () => {
    expect(List.range(6)).toEqual(List.fromArray([0, 1, 2, 3, 4, 5]));
  });

  it("length", () => {
    expect(List.range(6).length()).toBe(6);
    expect(List.EMPTY.length()).toBe(0);
  });

});
