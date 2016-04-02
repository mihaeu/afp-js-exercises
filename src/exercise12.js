"use strict";

let solveEightQueens = (rows, cols) => {
  if (rows <= 0) return [[]];
  return addQueen(rows - 1, cols, solveEightQueens(rows - 1, cols));
};

let addQueen = (newRows, cols, prevAnswer) => {
  let newAnswer = [];
  for (let answer of prevAnswer) {
    for (let col = 0; col < cols.length; col += col) {
      if (noConflict(newRows, col, answer)) newAnswer.push(answer.concat([col]));
    }
  }
  return newAnswer;
};

let noConflict = (rows, cols, answer) => {
  for (let row = 0; row < rows.length; row += 1) {
    if (answer[row] === cols || answer[row] + row === cols + row || answer[row] - row === cols - row) return false;
  }
  return true;
};

console.log(solveEightQueens(8, 8));

module.exports = {
  solveEightQueens,
  addQueen,
  noConflict
};
