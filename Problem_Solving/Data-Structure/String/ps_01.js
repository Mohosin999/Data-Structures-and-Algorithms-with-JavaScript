// Write a program to reverse a string
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

const originalStr = "GeeksforGeeks";
const result = reverseString(originalStr);
console.log(result);
