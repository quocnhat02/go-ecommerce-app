function removeDuplicates(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] === nums[right]) {
      right--;
    } else {
      left++;
      nums[left] = nums[right];
    }
  }

  return nums.slice(0, left + 1);
}

console.log(removeDuplicates([1, 1, 2])); // [1, 2]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // [0, 1, 2, 3, 4]
