function smallestDifference(arr) {
  let left = 0;
  let right = 1;
  let smallestDiff = Infinity;
  let result = [-1, -1];

  while (right < arr.length) {
    let diff = arr[right] - arr[left];
    if (diff < smallestDiff) {
      smallestDiff = diff;
      result = [arr[left], arr[right]];
    }
    if (diff === 0) return result;
    left++;
    right++;
  }
  return result;
}

// Kiểm tra
console.log(smallestDifference([1, 2, 3, 4, 5])); // [1, 2]
console.log(smallestDifference([1, 5, 8, 19, 25])); // [5, 8]
