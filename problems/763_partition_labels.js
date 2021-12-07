// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.
// Return a list of integers representing the size of these parts.

// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.

// Input: s = "eccbbbbdec"
// Output: [10]

const partitionLabels = function(s) {
  const letters = s.split('');
  let startPosition = 0;
  let startLetter = letters[startPosition];

  let i = letters.length - 1;
  while(letters[i] != startLetter){
    i--;
  }

  console.log('i ', i);

  for(let j = startPosition + 1; j < i; j++){
    console.log('---letters[j]--', letters[j]);
  }
};

// console.log(partitionLabels()) 
// console.log(partitionLabels('aabbccdd'))  // 'aa' 'bb' 'cc' 'dd'
// console.log(partitionLabels('qwerty'))  // 'q' 'w' 'e' 'r' 't' 'y'
// console.log(partitionLabels('abacdcefe'))  // 'aba' 'cdc' 'efe'
// console.log(partitionLabels('abacdcaefe'))  // 'abacdca' 'efe'
// console.log(partitionLabels('abcdcbefeb'))  // 'a' 'bcdcbefeb'
// console.log(partitionLabels('abacdcbefe'))  // 'abacdcb' 'efe'

console.log(partitionLabels('abcdapqrbwndyutyjuk'))  // 'abcdapqrbwnd' 'yutyju' 'k'
console.log(partitionLabels('abcdapqrbwndyutyjukp'))  // 'abcdapqrbwndyutyjukp'
// console.log(partitionLabels('abacdcbefea'))  // 'abacdcbefea'
// console.log(partitionLabels('abacdcbefeb'))  // 'abacdcbefeb'
// console.log(partitionLabels('aprstuacdcbefeb'))  // 'aprstua' 'cdc' 'befeb'
// console.log(partitionLabels('aprstuacdcbefuwv'))  // 'aprstuacdcbefu' 'w' 'v' 