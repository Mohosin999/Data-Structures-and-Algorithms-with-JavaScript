// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var majorityElement = function(nums) {
//   let dict = {};

// // Count the occurrences of each element
// nums.forEach((element) => {
// if (!dict.hasOwnProperty(element)) {
//   dict[element] = 1;
// } else dict[element]++;
// });

// //{ '2': 1, '3': 2 } - 1st test case
// //{ '1': 3, '2': 4 } - 2nd test case

// // Find the element with the maximum count
// let keys=Object.keys(dict)
// keys.sort((a,b)=> dict[b]-dict[a])
// return keys[0]
// };
function majorityElement(nums) {
  // Initialize the candidate and its count
  let candidate = null;
  let count = 0;

  // Iterate through the array
  for (const num of nums) {
    // If count is zero, set the current element as the candidate
    if (count === 0) {
      candidate = num;
    }

    // If the current element is the same as the candidate, increment the count
    if (num === candidate) {
      count++;
    } else {
      // If the current element is different, decrement the count
      count--;
    }
  }

  // At this point, 'candidate' is a potential majority element
  // Verify if it appears more than n/2 times
  count = 0;
  for (const num of nums) {
    if (num === candidate) {
      count++;
    }
  }

  if (count > nums.length / 2) {
    return candidate;
  } else {
    return null; // No majority element
  }
}
