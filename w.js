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

const nums = [3, 2, 4, 9];
console.log(twoSum(nums, 11));

const namedArr = [
  ["aaa", "bbb", "ccc"],
  ["AAA", "BBB", "CCC"],
  ["111", "222", "333"],
];

const getElement = (arr) => {
  for (let i = 0; i < arr.length; i++) {}
};

getElement(namedArr);
