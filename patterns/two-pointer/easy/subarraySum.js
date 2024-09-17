function subarraySum(nums, k) {
  let left = 0;
  let currentSum = 0;

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];

    while (currentSum > k) {
      currentSum -= nums[left];
      left++;
    }

    if (currentSum === k) {
      return [left, right];
    }
  }

  return [-1, -1];
}

console.log(subarraySum([1, 1, 1], 2)); // [0, 1]
console.log(subarraySum([1, 2, 3, 4, 5], 9)); // [1, 3]
console.log(subarraySum([1, 2, 3, 4, 5], 11)); // [-1, -1]
