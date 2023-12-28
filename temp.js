/* 
Write a function 'same' which accepts two arrays,
The function should return true if every value in the array has its corresponding value squared in second array,
The frequency of values must be same
same([1, 2, 3], [4, 1, 9]) // true
same([3, 4, 2], [4, 16]) // false
same([1, 2, 1], [4, 4, 1]) // false
*/

// function same(arr1, arr2) {
//   for (let i = 0; i <= arr1.length - 1; i++) {
//     if (!arr2.includes(arr1[i] * arr1[i])) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(same([1, 2, 3], [4, 1, 9]));

// function same(arr1, arr2) {
//   const hash1 = {};
//   const hash2 = {};

//   for (let i = 0; i <= arr1.length - 1; i++) {
//     hash1[arr1[i]] ? (hash1[arr1[i]] += 1) : (hash1[arr1[i]] = 1);
//   }

//   for (let i = 0; i <= arr2.length - 1; i++) {
//     hash2[arr2[i]] ? (hash2[arr2[i]] += 1) : (hash2[arr2[i]] = 1);
//   }

//   for (let key in hash1) {
//     if (hash1[key] !== hash2[key * key]) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(same([3, 4, 2], [4, 16]));

/* 
Given two strings, determine if second string is the anagram of first
An anagram is a word formed by rearranging letters of another such as cinema from iceman
validAnagram('', '') // true
validAnagram('cinema', 'iceman') // true
validAnagram('anagram', 'nagaram') // true
validAnagram('aaz', 'zza') // false
validAnagram('rat', 'car') // false
validAnagram('awesome', 'awesom') // false
*/

/*
function validAnagram(string1, string2) {
  if (string1.length !== string2.length) return false;

  const hash = {};

  for (let i in string1) {
    hash[string1[i]] ? (hash[string1[i]] += 1) : (hash[string1[i]] = 1);
  }

  for (let i in string2) {
    if (!hash[string2[i]]) {
      return false;
    }
    hash[string2[i]] -= 1;
  }

  return true;
}

console.log(validAnagram("anagram", "nagaram"));
*/

/* 
Write a function 'sumZero' which accepts sorted array of integers,
The function should return first pair where sum is 0,
Return an array that includes both nos that sum upto 0 or undefined if pair doesnt exist
sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([-2, 0, 1, 3]) // undefined
sumZero([-4, -3, -2, -1, 0, 1, 2, 5]) // [-2, 2]
sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]) // [-3, 3]
*/

function sumZero(arr = []) {
  let i = 0;
  let j = arr.length - 1;
  let sum = arr[i] + arr[j];

  if (sum == 0) return [arr[i], arr[j]];

  while (j > i) {
    sum > 0 ? j-- : i++;
    sum = arr[i] + arr[j];
  }
}
