# Array ( Data Structure )

## Table of Contents

- [Reverse the Array](#-reverse-the-array)

#### 01: Write a program to reverse the array

```
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
```
