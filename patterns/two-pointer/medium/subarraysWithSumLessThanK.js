// find all subarrays with sum less than k

function subarraysWithSumLessThanK(nums, k) {
  let left = 0;
  let sum = 0;
  let result = [];
  let temp = [];

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    temp.push(nums[right]);

    while (sum >= k && left <= right) {
      sum -= nums[left];
      left++;
      temp.shift();
    }

    for (let i = 0; i < temp.length; i++) {
      result.push(temp.slice(i));
    }
  }

  return result;
}

// Kiểm tra
console.log(subarraysWithSumLessThanK([1, 2, 3, 4], 7));
console.log(subarraysWithSumLessThanK([1, 2, 3, 4, 5], 10));
