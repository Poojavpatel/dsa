/* 
Check if One String Swap Can Make Strings Equal
You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.
Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

Input: s1 = "bank", s2 = "kanb"
Output: true
Explanation: For example, swap the first character with the last character of s2 to make "bank".

Input: s1 = "attack", s2 = "defend"
Output: false
Explanation: It is impossible to make them equal with one string swap.

Input: s1 = "kelb", s2 = "kelb"
Output: true
Explanation: The two strings are already equal, so no string swap operation is required.
*/

function areAlmostEqual(s1: string, s2: string): boolean {
  const swapArray: [string, string] = ["", ""];
  let unequalCount: number = 0;

  for (let i: number = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      unequalCount++;
      if (unequalCount > 2) {
        return false;
      }
      if (swapArray[0] == "") {
        swapArray[0] = s1[i];
        swapArray[1] = s2[i];
      } else {
        if (!(s1[i] == swapArray[1] && s2[i] == swapArray[0])) {
          return false;
        }
      }
    }
  }
  return unequalCount == 1 ? false : true;
}

console.log(areAlmostEqual("bank", "kanb")); // true
console.log(areAlmostEqual("bank", "knab")); // false
console.log(areAlmostEqual("attack", "defend")); // false
console.log(areAlmostEqual("kelb", "kelb")); // true
console.log(areAlmostEqual("aa", "ac")); // false
console.log(areAlmostEqual("qgqeg", "gqgeq")); // false
