function isEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;

  // return (
  //   arr1.length === arr2.length &&
  //   arr1.every((value, index) => value === arr2[index])
  // ); // worked

  // return (
  //   arr1.length === arr2.length &&
  //   arr1.every((_value, index) => arr1[index] === arr2[index])
  // ); // worked
}

const arr1 = ["akash", "nayem", "jabir", "babu", "ashik", "rasel"];
const arr2 = ["akash", "nayem", "jabir", "babu", "ashik", "rasel"];

console.log(isEqual(arr1, arr2));
