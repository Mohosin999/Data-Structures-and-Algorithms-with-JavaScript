/**
 * How do you access the first and last elements of an array?
 * How do you loop through an array in JavaScript?
 * Question 01: How do you check if an element exists in an array?
 * Question 02: How do you check if an element exists in an array? If exist return it's index.
 * Question 03: How to Delete, Add and Update element specific index? // using Splice()
 *
 */

// How do you access the first and last elements of an array?
const arr = [1, 2, 3, 4, 5, 6];

const firstElement = arr[0]; // time complexity - O(1)
const lastElement = arr[arr.length - 1];

console.log(firstElement, lastElement); // 1, 6

// How do you loop through an array in JavaScript?
// 01. for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 02. forEach method
arr.forEach((x, i) => {
  console.log(x);
});

// 03. "for of" loop
for (let x of arr) {
  console.log(x);
}

/**
 * Question 01: How do you check if an element exists in an array?
 */
const findElement = (arr, target) => {
  for (let x of arr) {
    if (x === target) {
      return true;
    }
  }
  return false;
};

console.log(findElement(arr, 5)); // true
console.log(arr.includes(7)); // false
console.log(arr.includes(5)); // true

/**
 * Why not the following style working?
 */
// function isExist(arr, target) {
//   arr.forEach((value) => {
//     if (value === target) {
//       return true;
//     }
//     return false;
//   });
// }
// console.log(isExist(arr, 6));

/**
 * Question 02: How do you check if an element exists in an array? If exist return it's index.
 */
const findElementIndex = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(findElementIndex(arr, 1)); // 0
console.log(arr.indexOf(1)); // 0

/**
 * Question 03: How to Delete, Add and Update element specific index? // using Splice()
 */
const arr1 = [1, 2, 3, 4, 5];
// delete
arr1.splice(2, 1);
// add
arr1.splice(2, 0, "akash");
// update
arr1.splice(2, 1, "Mohosin Hasan Akash");
