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

function validAnagram(str1='', str2=''){
  if(str1.length !== str2.length) return false;
  const hash1 = {};
  const hash2 = {};
  for(i in str1) { hash1[str1[i]] ? hash1[str1[i]] += 1 : hash1[str1[i]] = 1 };
  for(i in str2) { hash2[str2[i]] ? hash2[str2[i]] += 1 : hash2[str2[i]] = 1 };
  console.log(hash1,hash2);
  for(let key in hash1){
    if(!hash2[key]) return false;
    if(hash1[key] !== hash2[key]) return false;
  }
  return true;
}


console.log(validAnagram('', ''));
console.log(validAnagram('cinema', 'iceman'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));