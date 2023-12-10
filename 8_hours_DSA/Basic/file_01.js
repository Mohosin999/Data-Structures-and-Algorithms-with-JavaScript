/**
 * Table of Content
 *
 * Question 01 : Sum of all natural numbers from 1 to n.
 * Question 02 : Sum of digits of a number.
 * Question 03 : Count the number of digits of a number.
 * Problem Solve 01 : Palindrome Number.
 * Problem Solve 02 : Fibonacci Numbers.
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

/**
 * Problem Solve 01 : Palindrome Number.
 *
 * Given an integer x, return true if x is a palindrome and false otherwise.
 * What is a palindrome? = 121 is a palindrome ( 121 and 121 ) but 122 is not ( 122 and 221 ).
 *
 * Process:
 * 123%10 = 3 and the number will be 12.
 * 0*10 + lastNum = 0+3 = 3
 *
 * Again, 12%10 = 2 and the number will be 1.2 ( 1 because of Math.floor())
 * 3*10 + lastNum = 30+2 = 32
 *
 * Continue...
 */
function isPalindrome(x) {
  let copyNum = x,
    reverseNum = 0;

  while (copyNum > 0) {
    const lastDigit = copyNum % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    copyNum = Math.floor(copyNum / 10);
  }
  return x === reverseNum;
}

console.log(isPalindrome(121)); // true ( because 121 )
console.log(isPalindrome(123)); // false ( because 321 )

/**
 * Problem Solve 02 : Fibonacci Numbers.
 *
 * What is a Fibonacci Numbers? = 0 1 1 2 3 5 8
 * 0 1 = 0+1 = 0 1 1
 * 0 1 1 = 1+1 = 2
 * 0 1 1 2 = 1+2 = 3
 * 0 1 1 2 3 = 2+3 = 5
 * 0 1 1 2 3 5
 * Continue... ( sum the last two numbers )
 *
 * F(2) = the number will be 1 ( because 0 1 1 )
 * F(5) = the number will be 5 ( because 0 1 1 2 3 5 )
 */
function fibonacciNum(n) {
  if (n < 2) {
    return n;
  }

  let prev = 0,
    curr = 1,
    next;

  for (let i = 2; i <= n; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
  }

  return next;
}
