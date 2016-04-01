"use strict";

module.exports.List = class List {
  /**
   * @param {number[]} xs
   */
  constructor(xs) {
    if (xs.constructor !== Array) throw new Error("Invalid argument");
    if (xs.filter(i => Number.isNaN(i)).length > 0) throw new Error("Invalid argument");

    this._head = xs[0];
    this._tail = xs.slice(1);
  }

  /**
   * @returns {number[]}
   */
  toArray() {
    return [this._head].concat(this._tail);
  }

  prepend(list) {
    return new List();
  }

  append(list) {

  }

  reverse() {

  }

  contains() {

  }

  remove(int) {

  }

  delete(int) {

  }

  get(int) {

  }

  pop(int) {

  }

  union(list) {

  }

  diff(list) {

  }

  uniq() {

  }

  sort() {

  }

  primes() {

  }

  shuffle(Random) {

  }

  filter() {

  }

  foreach() {

  }

  reduceL() {

  }

  reduceR() {

  }

  map() {

  }

  zip() {

  }
};
