/*====================================
        Problem Solving - 01
====================================*/
function makeLatinSquare(n) {
  // Create an empty n x n matrix
  const square = Array.from({ length: n }, () => []);

  // Fill the matrix with the numbers 1 to n
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      square[i][j] = ((i + j) % n) + 1;
    }
  }

  return square;
}

// another solution 01
const makeLatinSquare1 = (n) => {
  let square = new Array(n).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      square[i][j] = ((i + j) % n) + 1;
    }
  }

  return square;
};

// console.log(generateLatinSquare(4));
// Output:
// [[1, 2, 3, 4],
//  [2, 3, 4, 1],
//  [3, 4, 1, 2],
//  [4, 1, 2, 3]]

// console.log(generateLatinSquare(7));
// Output:
// [[1, 2, 3, 4, 5, 6, 7],
//  [2, 3, 4, 5, 6, 7, 1],
//  [3, 4, 5, 6, 7, 1, 2],
//  [4, 5, 6, 7, 1, 2, 3],
//  [5, 6, 7, 1, 2, 3, 4],
//  [6, 7, 1, 2, 3, 4, 5],
//  [7, 1, 2, 3, 4, 5, 6]]

/*====================================
        Problem Solving - 02
====================================*/
