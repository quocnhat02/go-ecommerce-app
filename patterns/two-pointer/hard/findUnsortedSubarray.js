// given an array of integers, find the shortest subarray that, if sorted, will sort the whole array
// return the length of the subarray
// if the entire array is already sorted, return 0
// example: [1, 2, 3, 4, 5] -> 0
// example: [2, 6, 4, 8, 10, 9, 15] -> 5 (the subarray [6, 4, 8, 10, 9] is unsorted)
// example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] -> 0
// example: [1, 3, 2, 2, 2] -> 4 (the subarray [3, 2, 2, 2] is unsorted)
// example: [1, 2, 4, 5, 3] -> 3 (the subarray [4, 5, 3] is unsorted)
// example: [1, 3, 2, 4, 5] -> 2 (the subarray [3, 2] is unsorted)
// example: [1, 2, 3, 3, 3] -> 0

function findUnsortedSubarray(nums) {
  let left = 0;
  let right = nums.length - 1;

  // find the leftmost element that is out of order
  while (left < right && nums[left] <= nums[left + 1]) left++;
  // find the rightmost element that is out of order
  while (right > left && nums[right] >= nums[right - 1]) right--;

  // if the array is already sorted
  if (left === right) return 0;

  // find the minimum and maximum values in the unsorted subarray
  let min = Math.min(...nums.slice(left, right + 1));
  let max = Math.max(...nums.slice(left, right + 1));

  // expand the left and right pointers to include all elements that are out of order
  while (left > 0 && nums[left - 1] > min) left--;
  while (right < nums.length - 1 && nums[right + 1] < max) right++;

  return right - left + 1;
}

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])); // 5
console.log(findUnsortedSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 0
console.log(findUnsortedSubarray([1, 3, 2, 2, 2])); // 4
console.log(findUnsortedSubarray([1, 2, 4, 5, 3])); // 3
console.log(findUnsortedSubarray([1, 3, 2, 4, 5])); // 2
console.log(findUnsortedSubarray([1, 2, 3, 3, 3])); // 0
