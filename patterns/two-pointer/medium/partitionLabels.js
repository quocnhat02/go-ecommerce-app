// given a string s, we need to partition the string into as many parts as possible such that each letter appears in at most one part
// return a list of integers representing the size of each partition

// input: s = "abac"
// output: [1, 2]

// input: s = "ababcbacadefegdehijhklij"
// output: [9, 7, 8]

function partitionLabels(s) {
  const lastIndex = new Map();
  for (let i = 0; i < s.length; i++) {
    lastIndex.set(s[i], i);
  }

  const result = [];
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, lastIndex.get(s[i]));

    if (i === end) {
      result.push(end - start + 1);
      start = i + 1;
    }
  }
  return result;
}

// Kiểm tra
console.log(partitionLabels('abac')); // [1, 2]
console.log(partitionLabels('ababcbacadefegdehijhklij')); // [9, 7, 8]
