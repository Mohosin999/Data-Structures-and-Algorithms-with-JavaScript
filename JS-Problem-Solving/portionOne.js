/*====================================
        Problem Solving - 01
====================================*/
function makeLatinSquare(n) {
  // Create an empty n x n matrix
  const square = Array.from({ length: n }, () => []);
}

// another solution 01
const makeLatinSquare1 = (n) => {
  let square = new Array(n).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      square[i][j] = ((i + j) % n) + 1;
    }
  }
};

/*====================================
        Problem Solving - 01
====================================*/
function secondSymbol(s, symbol) {
  const fIndex = s.indexOf(symbol);

  if (fIndex === -1) {
    return -1;
  }

  // indexOf(indexValue)
  // indexOf(indexValue, fromWhereStartAgain)

  const sIndex = s.indexOf(symbol, fIndex + 1);

  if (sIndex === -1) {
    return -1;
  }

  return sIndex;
}

console.log(secondSymbol("Mongol", "o"));
