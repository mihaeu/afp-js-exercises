"use strict";

var List = class List {

  /**
   * @param {number} head
   * @param {List} tail
   */
  constructor(head, tail) {
    this.head = head || 0;
    this.tail = tail || null;
  }

  /**
   * @param {number} value
   * @returns {List}
   */
  prependValue(value) {
    return new List(value, this);
  }

  /**
   * @param {List} list
   * @returns {List}
   */
  prependList(list) {
    if (this === List.EMPTY) return list;
    if (list === List.EMPTY) return this;
    if (list.tail === List.EMPTY) return this.prependValue(list.head);
    return this.prependList(list.tail).prependValue(list.head);
  }

  /**
   * @param {number} value
   * @returns {List}
   */
  appendValue(value) {
    if (this === List.EMPTY) return this.prependValue(value);
    return this.tail.appendValue(value).prependValue(this.head);
  }

  /**
   * @param {List} list
   * @returns {List}
   */
  appendList(list) {
    return list.prependList(this);
  }

  /**
   * @returns {List}
   */
  reverse() {
    if (this === List.EMPTY) return this;
    return this.tail.reverse().appendValue(this.head);
  }

  /**
   * @param {number} value
   * @returns {boolean}
   */
  contains(value) {
    if (this === List.EMPTY) return false;
    if (this.head === value) return true;
    return this.tail.contains(value);
  }

  /**
   * @param {number} value
   * @returns {List}
   */
  remove(value) {
    if (this === List.EMPTY) return this;
    if (this.head === value) return this.tail.remove(value);
    return this.tail.remove(value).prependValue(this.head);
  }

  /**
   * @param {number} index
   * @returns {List}
   */
  delete(index) {
    if (this === List.EMPTY || index < 0) throw new Error("Index out of bounds");
    if (index === 0) return this.tail;
    return this.tail.delete(index - 1).prependValue(this.head); 
  }

  /**
   * @param {number} index
   * @returns {number}
   */
  get(index) {
    if (this === List.EMPTY) throw new Error("No such element");
    if (index === 0) return this.head;
    return this.tail.get(index - 1);
  }

  /**
   * @param {number} index
   * @returns {List}
   */
  pop(index) {
    if (this === List.EMPTY || index < 0) throw new Error("Index out of bounds");
    if (index === 0) return this;
    const list = this.tail.pop(index - 1);
    return list.tail.prependValue(this.head).prependValue(list.head);
  }

  /**
   * @param {List} list
   * @returns {List}
   */
  union(list) {
    if (this === List.EMPTY) return list;
    if (list === List.EMPTY) return this;
    if (!this.contains(list.head)) return this.appendValue(list.head).union(list.tail);
    return this.union(list.tail);
  }

  /**
   * @param {List} list
   * @returns {List}
   */
  diff(list) {
    if (this === List.EMPTY) return list;
    if (list === List.EMPTY) return this;

    return this.remove(list.head).diff(list.tail);
  }

  /**
  * @returns {List}
  */
  uniq() {
    if (this === List.EMPTY) return this;
    return this.tail.remove(this.head).uniq().prependValue(this.head);
  }

  /**
   * @returns {List}
   */
  sort() {
    if (this === List.EMPTY) return this;
    return this.tail.filter(i => i < this.head).sort()
      .appendValue(this.head)
      .appendList(this.tail.filter(i => i >= this.head).sort());
  }

  /**
   * @returns {List}
   */
  primes() {
    if (this === List.EMPTY) return this;
    return this.tail.filter(i => (i % this.head) !== 0).primes().prependValue(this.head);
  }

  /**
   * return {number}
   */
  length() {
    return (this === List.EMPTY) ? 0 : 1 + this.tail.length();
  }

  /**
   * @param {number} length
   * @returns {List}
   */
  shuffle(length) {
    length = length || this.length();
    if (length < 2) return this;
    let pop = this.pop(Math.floor(Math.random() * length));
    return pop.tail.shuffle(length - 1).prependValue(pop.head);
  }

  /**
   * @callback fn
   * @returns {List}
   */
  filter(fn) {
    if (this === List.EMPTY) return this;
    if (fn(this.head)) return this.tail.filter(fn).prependValue(this.head);
    return this.tail.filter(fn);
  }

  /**
   * @callback fn
   */
  forEach(fn) {
    if (this === List.EMPTY) return;
    fn(this.head);
    this.tail.forEach(fn);
  }

  /**
   * @param {callback} fn
   * @param {number} init
   * @returns {*}
   */
  foldL(fn, init) {
    let list = this, result = init;
    while (list != List.EMPTY) {
      result = fn(result, list.head);
      list = list.tail;
    }
    return result;
  }

  reduceL(fn) {
    return this.tail.foldL(fn, this.head);
  }

  /**
   * @param fn
   * @returns {*}
   */
  reduceR(fn) {
    if (this.tail === List.EMPTY) return this.head;
    return fn(this.head, this.tail.reduceR(fn));
  }

  /**
   * @callback fn
   * @returns {List}
   */
  map(fn) {
    if (this === List.EMPTY) return this;
    return this.tail.map(fn).prependValue(fn(this.head));
  }

  /**
   * @param {callback} fn
   * @param {List} list
   * @returns {List}
   */
  zip(fn, list) {
    if (this === List.EMPTY || list === List.EMPTY) return List.EMPTY;
    return this.tail.zip(fn, list.tail).prependValue(fn(this.head, list.head));
  }

};

module.exports.List = List;
module.exports.List.EMPTY = new List(0, null);

/**
 * @param {number[]} xs
 * @returns {List}
 */
module.exports.List.fromArray = (xs) => {
  var list = List.EMPTY;
  for (const x of xs.reverse()) {
    list = list.prependValue(x);
  }
  return list;
};

/**
 * @param {number} to
 * @returns {List}
 */
module.exports.List.range = (to) => {
  return List.fromArray(Array.apply(null, { length: to }).map(Number.call, Number));
};

/**
 * @param {number} n
 * @returns {List}
 */
module.exports.List.primes = (n) => {
  return List.range(n).primes();
}
