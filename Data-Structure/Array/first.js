/**
 * Problem - 01
 * Rearrange an array in maximum minimum form using Two Pointer Technique
 * Example:
 * Input: arr[] = {1, 2, 3, 4, 5, 6, 7}
 * Output: arr[] = {7, 1, 6, 2, 5, 3, 4}
 */

function rearrangeArray(arr) {
  arr.sort();
  let left = 0;
  let right = arr.length - 1;
  let result = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      result[i] = arr[right--];
    } else {
      result[i] = arr[left++];
    }
  }

  return result;
}

const arr = [4, 5, 2, 3, 6, 1];
const newArr = rearrangeArray(arr);
console.log(newArr);
