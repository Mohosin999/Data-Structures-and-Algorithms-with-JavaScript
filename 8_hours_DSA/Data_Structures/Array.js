/**
 * How do you access the first and last elements of an array?
 * How do you loop through an array in JavaScript?
 * Question 01: How do you check if an element exists in an array?
 * Question 02: How do you check if an element exists in an array? If exist return it's index.
 * Question 03: How to Delete, Add and Update element specific index? // using Splice()
 * Shallow copy of Array.
 * Deep copy of Array.
 * How to add two array?
 * Question 04: How can you check if two array are equal?
 * Question 05: How to sort an array in ascending and descending order?
 * Question 06: How to reverse an array?
 * Flat
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

/**
 * Shallow copy of Array.
 * In shallow copy, if I change arrB, arr will also be changed.
 * arrB & arr indicates -> same memory location and same reference.
 */
const arrB = arr;

arrB.push("akash");
console.log(arrB, arr);
console.log(arrB === arr); // true

/**
 * Deep copy of Array.
 * In deep copy, if I change arrC, arr will not be changed.
 */
const arrC = [...arr]; // process 01
const arrD = Array.from(arr); // process 02
const arrE = arr.concat(); // process 03

arrC.push(7);
console.log(arrC, arr);
console.log(arrE);

/**
 * How to add two array?
 */
const newArr = [...arr, ...arrE]; // process 01
const newArr1 = arr.concat(arrE); // process 02

console.log(newArr, newArr1);

/**
 * Question 04: How can you check if two array are equal?
 */
function isEqual(arr1, arr2) {
  // process 01
  // if (arr1.length !== arr2.length) {
  //   return false;
  // }

  // for (let i = 0; i < arr1.length; i++) {
  //   if (arr1[i] !== arr2[i]) {
  //     return false;
  //   }
  // }
  // return true;

  // process 02
  return (
    arr1.length === arr2.length &&
    arr1.every((_element, index) => arr1[index] === arr2[index])
  );
}

console.log(isEqual([1, 2, 3], [1, 2, 3])); // true

/**
 * Question 05: How to sort an array in ascending and  order?
 */
const x = [3, 1, 5, 2, 4, 0];
x.sort(); // ascending
x.sort((a, b) => b - a); // descending
console.log(x);

/**
 * Question 06: How to reverse an array?
 */
x.reverse();
console.log(x);

/**
 * Flat
 */
