// given an array of integers, where each integer represents the height of a vertical line on a chart
// return the area of water trapped between the vertical lines.

// input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// output: 6

// input: height = [4,2,0,3,2,5]
// output: 9

// two pointers
// left pointer and right pointer
// iterate through the array with the right pointer
// calculate the area of water trapped between the vertical lines
// return the area of water trapped

function trap(height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let waterTrapped = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] > leftMax) {
        leftMax = height[left];
      } else {
        waterTrapped += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] > rightMax) {
        rightMax = height[right];
      } else {
        waterTrapped += rightMax - height[right];
      }
      right--;
    }
  }

  return waterTrapped;
}

let height1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let height2 = [4, 2, 0, 3, 2, 5];

console.log(trap(height1)); // 6
console.log(trap(height2)); // 9
