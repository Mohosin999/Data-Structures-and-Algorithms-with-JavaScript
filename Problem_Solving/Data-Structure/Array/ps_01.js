// Write a program to reverse the array
function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    // Swap elements at start and end indices
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    // Move indices towards the center
    start++;
    end--;
  }

  return arr;
}

const originalArray = [1, 2, 3, 4, 5];
reverseArray(originalArray);
console.log(originalArray);

// Find minimum and maximum element in an array
// process 01 ( process 01 is more effective )
function minmaxNum1(arr, n) {
  if (n === 0) {
    return { min: undefined, max: undefined };
  }

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < n; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return { min, max };
}

const arr1 = [1, 4, 2, 3, 7, 5];
const result = minmaxNum1(arr1, arr1.length);
console.log(result);

// process 02
function minmaxNum2(arr) {
  const minmax = {};

  arr.sort((a, b) => a - b);
  minmax.min = arr[0];
  minmax.max = arr[arr.length - 1];

  return minmax;
}

const arr2 = [1, 4, 2, 3, 7, 5];
const result2 = minmaxNum2(arr2);
console.log(result2);
