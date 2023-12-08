/**
 * Question 01 : Sum of all natural numbers from 1 to n.
 *
 * sum of 1 to 5: 15
 */

// System 01
function sumOfNaturalNumber(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    // here "i" is a loop variable, not index. So "i = 1" means "i" value is 1.
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

/**
 * Question 02 : Sum of digits of a number.
 *
 * 1287: 1+2+8+7 = 18
 *
 */
function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(sumOfDigits(1287));
