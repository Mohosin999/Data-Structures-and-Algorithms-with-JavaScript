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
