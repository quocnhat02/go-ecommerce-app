// given a sorted array of integers nums, remove the duplicates in-place such that each unique element appears at most twice.
// return the length of the array after duplicates are removed

// input: nums = [1, 1, 1, 2, 2, 3]
// output: 5

// input: nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]
// output: 7

function removeDuplicatesII(nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (i < 2 || nums[j] > nums[i - 2]) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
}

let nums1 = [1, 1, 1, 2, 2, 3];
let nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];

console.log(nums1.slice(0, removeDuplicatesII(nums1))); // [1, 1, 2, 2, 3]
console.log(nums2.slice(0, removeDuplicatesII(nums2))); // [0, 0, 1, 1, 2, 3, 3]
