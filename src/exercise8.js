"use strict";

/**
 * @param {List} list
 * @returns {List}
 */
let even = (list) => {
  return list.filter(i => i % 2 === 0);
};

module.exports.even = even;