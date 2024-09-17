// given an array of integers nums and an integer target
// return all the unique quadruplets

function fourSum(nums, target) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);

          while (nums[left] === nums[left + 1]) left++;
          while (nums[right] === nums[right - 1]) right--;

          left++;
          right--;
        } else if (sum < target) left++;
        else right--;
      }
    }
  }

  return result;
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0)); // [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
console.log(fourSum([2, 2, 2, 2, 2], 8)); // [[2, 2, 2, 2]]
