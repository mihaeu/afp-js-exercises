"use strict";

/**
 * @param {List} list
 * @returns {number}
 */
let sum = list => {
  return list.reduceL((a, b) => a + b);
};

/**
 * @param {List} list
 * @returns {List}
 */
let avg = (list) => {
  return sum(list) / list.length();
}

module.exports = {sum, avg};
