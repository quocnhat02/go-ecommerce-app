// given a string s, find the length of the longest substring without repeating characters.

// input: s = "abcabcbb"
// output: 3

// input: s = "bbbbb"
// output: 1

// input: s = "pwwkew"
// output: 3

// two pointers
// map to store the characters and their indices
// maxLength to store the length of the longest substring
// left pointer and right pointer
// iterate through the string with the right pointer
// if the character is not in the map, add it to the map
// if the character is in the map, move the left pointer to the right of the character
// update the maxLength
// return the maxLength

function lengthOfLongestSubstring(s) {
  let charMap = new Map();
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    if (!charMap.has(currentChar)) {
      charMap.set(currentChar, right);
    } else {
      left = charMap.get(currentChar) + 1;
      charMap.set(currentChar, right);
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

let s1 = 'abcabcbb';
let s2 = 'bbbbb';
let s3 = 'pwwkew';

console.log(lengthOfLongestSubstring(s1)); // 3
console.log(lengthOfLongestSubstring(s2)); // 1
console.log(lengthOfLongestSubstring(s3)); // 3
