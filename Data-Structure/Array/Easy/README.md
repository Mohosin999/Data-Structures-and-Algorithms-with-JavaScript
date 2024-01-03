# Array - Basic & Easy Problems

### 01. Write a program to reverse the array

```javascript
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

### 02. Find minimum and maximum element in an array

#### `Process 01`

```javascript
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
```

#### `Process 02`

```javascript
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
```

### 03. Sort The Array

```javascript
function sortArr(arr) {
  arr.sort((a, b) => a - b);

  // Return the sorted array
  return arr;
}

const arr = [3, 5, 2, 1, 4];
console.log(sortArr(arr));

```

### 03. How do you check if an element exists in an array?

```javascript
function findElement(arr, target) {
  for (let x of arr) {
    if (x === target) {
      return true;
    }
  }

  return false;
}

const arr = ["akash", "nayem", 2, 5, "rasel"];

console.log(findElement(arr, "akash"));
console.log(arr.includes(5));
```

### 03. Sort The Array

```

```
