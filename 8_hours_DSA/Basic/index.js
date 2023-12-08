/**
 * Table of Content
 *
 * Question 01 : Sum of all natural numbers from 1 to n.
 * Question 02 : Sum of digits of a number.
 * Question 03 : Count the number of digits of a number.
 */

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
 * 1287
 * 1287%10 , reminder: 7, Q: 128
 * 128%10, reminder: 8, Q: 12
 * 12%10, reminder: 2, Q: 1
 * 1%10, reminder: 1, Q: 0
 * reminder = 7 + 8 + 2 + 1 = 18
 */
function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(sumOfDigits(1287)); // 18

/**
 * Question 03 : Count the number of digits of a number.
 *
 * 34252 = 5
 */
function countDigits(num) {
  num = Math.abs(num);
  let count = 0;

  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);

  return count;
}

console.log(countDigits(34252)); // 5

// Another way
function countNumDigits(num) {
  const numStr = Math.abs(num).toString();
  return numStr.length;
}

console.log(countNumDigits(34252)); // 5
