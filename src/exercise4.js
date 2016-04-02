"use strict";

let fib = (n) => {
  if (n === 1) return 1;
  if (n === 0) return 0;
  return fib(n -2) + fib(n -1);
};
module.exports.fib = fib;