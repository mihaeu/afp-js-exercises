"use strict";

/**
 * @param {List} list
 * @returns {List}
 */
let square = (list) => {
  return list.map(i => i * i);
};

module.exports.square = square;