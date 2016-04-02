"use strict";

let faculty = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return n * faculty(n - 1);
}
module.exports.faculty = faculty;