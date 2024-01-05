const nums = [3, 2, 4, 9];

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  // If no solution is found
  return [];
}

console.log(twoSum(nums, 11));
