/**
 * Problem - 01
 * Rearrange an array in maximum minimum form using Two Pointer Technique
 * Example:
 * Input: arr[] = {1, 2, 3, 4, 5, 6, 7}
 * Output: arr[] = {7, 1, 6, 2, 5, 3, 4}
 */

// function rearrangeArray(arr) {
//   arr.sort();
//   let left = 0;
//   let right = arr.length - 1;
//   let result = new Array(arr.length);

//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//       result[i] = arr[right--];
//     } else {
//       result[i] = arr[left++];
//     }
//   }

//   return result;
// }

// const arr = [4, 5, 2, 3, 6, 1];
// const newArr = rearrangeArray(arr);
// console.log(newArr);

/**
 * Problem - 02
 * Segregate even and odd numbers
 * Example :
 * Input: arr[] = 1 9 5 3 2 6 7 11
 * Output: 2 6 5 3 1 9 7 11
 */

// function arrayEvenAndOdd(arr) {
//   const n = arr.length;
//   let newArr = new Array(n);
//   let count = 0;

//   for (let i = 0; i < n; i++) {
//     if (arr[i] % 2 === 0) {
//       newArr[count++] = arr[i];
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     if (arr[i] % 2 !== 0) {
//       newArr[count++] = arr[i];
//     }
//   }

//   return newArr;
// }

// const arr = [1, 3, 2, 4, 7, 6, 9, 10];
// const result = arrayEvenAndOdd(arr);
// console.log(result);

/**
 * Problem - 03
 * Reversal algorithm for Array rotation
 * Input:  arr[] = {1, 2, 3, 4, 5, 6, 7}, d = 2
 * Output: 3, 4, 5, 6, 7, 1, 2
 */

// function rotateArr(arr, d) {
//   for (let i = 0; i < d; i++) {
//     const store = arr.shift(i);
//     arr.push(store);
//   }
//   return arr;
// }

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const result = rotateArr(arr, (d = 2));
// console.log(result);

/**
 * Problem - 04
 * Print left rotation of array in O(n) time and O(1) space
 * Input :
 * arr[] = {1, 3, 5, 7, 9}
 * k1 = 14
 * Output :
 * 9 1 3 5 7
 */
// function leftRotate(arr, d) {
//   const n = arr.length;
//   d = d % n; // if d is greater than n, we only need to rotate d%n times.
//   reverseArray(arr, 0, d - 1);
//   reverseArray(arr, d, n - 1);
//   reverseArray(arr, 0, n - 1);
//   return arr;
// }

// function reverseArray(arr, start, end) {
//   while (start < end) {
//     [arr[start], arr[end]] = [arr[end], arr[start]];
//     start++;
//     end--;
//   }
// }

// const arr = [1, 3, 5, 7, 9];
// const d = 1;
// const result = leftRotate(arr, d);
// console.log(result);

/**
 * Problem - 05
 * Sort an array in wave form
 */
// function waveArr(arr) {
//   arr.sort((a, b) => a - b);

//   for (let i = 0; i < arr.length; i += 2) {
//     if (arr[i] < arr[i + 1]) {
//       let temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//     }
//   }
//   return arr;
// }

// let array = [10, 90, 49, 2, 1, 5, 23];
// const result = waveArr(array);
// console.log(result);

/**
 * Problem - 05
 * Sort an array which contain 1 to n values
 */
function mySort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const arr = [10, 7, 9, 2, 8, 3, 5, 4, 6, 1];
const result = mySort(arr);
console.log(result);
