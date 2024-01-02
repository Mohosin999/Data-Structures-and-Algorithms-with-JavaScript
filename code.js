function sortArr(arr) {
  arr.sort((a, b) => a - b);

  // Return the sorted array
  return arr;
}

const arr = [3, 5, 2, 1, 4];
console.log(sortArr(arr));
