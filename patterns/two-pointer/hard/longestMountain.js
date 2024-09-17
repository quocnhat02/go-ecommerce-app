// given an array of integers, find the length of the longest mountain. a mountain is a sequence of consecutive increasing integers, followed by a sequence of consecutive decreasing integers
// example: [2, 1, 4, 7, 3, 2, 5] -> 5 (1, 4, 7, 3, 2)

function longestMountain(arr) {
  let maxLength = 0;
  let up = 0;
  let down = 0;

  for (let i = 1; i < arr.length; i++) {
    if ((down > 0 && arr[i - 1] < arr[i]) || arr[i - 1] === arr[i]) {
      up = down = 0;
    }

    if (arr[i - 1] < arr[i]) {
      up++;
    } else if (arr[i - 1] > arr[i]) {
      down++;
    }

    if (up > 0 && down > 0) {
      maxLength = Math.max(maxLength, up + down + 1);
    }
  }

  return maxLength;
}

console.log(longestMountain([2, 1, 4, 7, 3, 2, 5])); // 5
console.log(longestMountain([2, 2, 2])); // 0
console.log(longestMountain([0, 1, 0, 2, 1, 0])); // 4
