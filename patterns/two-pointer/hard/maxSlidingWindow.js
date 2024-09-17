// given an array of integers, find the maximum sum of k consecutive elements in the array
// example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k = 3 -> 27 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)

function maxSlidingWindow(nums, k) {
  let result = [];
  let deque = [];

  for (let i = 0; i < nums.length; i++) {
    // remove indices that are out of the current window
    if (deque.length > 0 && deque[0] < i - k + 1) deque.shift();

    // remove indices whose corresponding values are less than nums[i]
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i])
      deque.pop();

    // add the current index to the deque
    deque.push(i);

    // add the maximum value in the current window to the result
    if (i >= k - 1) result.push(nums[deque[0]]);
  }

  return result;
}

console.log(maxSlidingWindow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // [3, 4, 5, 6, 7, 8, 9, 10]
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3, 3, 5, 5, 6, 7]
