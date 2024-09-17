// given a string s and a string t, find the minimum window in s which will contain all the characters in t
// example: s = "ADOBECODEBANC", t = "ABC" -> "BANC"

function minWindow(s, t) {
  let left = 0;
  let right = 0;
  let count = 0;
  let result = '';
  let tCount = {};
  let sCount = {};

  for (let char of t) {
    tCount[char] = (tCount[char] || 0) + 1;
  }

  while (right < s.length) {
    let char = s[right];
    sCount[char] = (sCount[char] || 0) + 1;

    if (tCount[char] && sCount[char] <= tCount[char]) count++;

    while (count === t.length) {
      if (result === '' || right - left + 1 < result.length) {
        result = s.slice(left, right + 1);
      }

      sCount[s[left]]--;
      if (tCount[s[left]] && sCount[s[left]] < tCount[s[left]]) count--;
      left++;
    }

    right++;
  }

  return result;
}

console.log(minWindow('ADOBECODEBANC', 'ABC')); // "BANC"
console.log(minWindow('a', 'aa')); // ""
