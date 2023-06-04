// problem and solve :
function reverseNumber(n, b) {
  // Convert n to a string in base b
  let numString = n.toString(b);

  // Reverse the string
  let reversedString = numString.split("").reverse().join("");

  // Convert the reversed string back to an integer in base 10
  let reversedNumber = parseInt(reversedString, b);

  return reversedNumber;
}
