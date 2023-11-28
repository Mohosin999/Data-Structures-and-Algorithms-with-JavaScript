/**
 * Question 01 : sum of all natural numbers from 1 to n.
 *
 * sum of 1 to 5: 15
 */

// System 01
function sumOfNaturalNumber(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    // If I use "i = 0", the result will same.
    sum += i;
  }
  return sum;
}

console.log(sumOfNaturalNumber(10)); //55

// System 02 ( I think it's so smart system ).
function sumOfNaturalNumber2(num) {
  return (num * (num + 1)) / 2;
}

console.log(sumOfNaturalNumber2(10)); // 55 ( awesome )
