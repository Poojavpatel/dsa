/* 
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
Input: nums = [3,0,1]
Output: 2
n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
*/

// Approch 1 - using Hash (Time complexity:O(n) Space complexity:O(n))
var missingNumber1 = function(nums) {
  let result = 1;
  const hash = {};
  for(let num of nums){
      hash[num] = true;
  }
  for(let i=0;i<=nums.length;i++){
      if(!hash[i]){
          result = i;
          break;
      }
  }
  return result;
};

// Approch 2 - Bit Manipulation using XOR (Time complexity:O(n) Space complexity:O(1))
var missingNumber2 = function(nums) {
  let result = nums.length;
  for (let i = 0; i < nums.length; i++) {
    result = result ^ i ^ nums[i];
  }
  return result;
};
/* Because we know that nums contains n numbers and that it is missing exactly one number on the range [0..n−1],
we know that n definitely replaces the missing number in nums.
Therefore, if we initialize an integer to n and XOR it with every index and value, we will be left with the missing number. 
nums = [0,1,3,4]
  4∧(0∧0)∧(1∧1)∧(2∧3)∧(3∧4)
= 4∧(0)∧(0)∧(1)∧(7)
= 4∧0∧6
= 4∧6
= 2
​*/

// Approch 3 - Gauss Formula (Time complexity:O(n) Space complexity:O(n))
var missingNumber3 = function(nums) {
  const n = nums.length + 1;
  let sum = (n*(n-1))/2;
  const arrSum = nums.reduce((total, num) => { return total + num }, 0);
  return sum - arrSum;
};
/* By Gauss formula, we can compute the sum of the first n natural numbers in constant time.Therefore,the number that is missing is
simply the result of Gauss formula minus the sum of nums,as nums consists of the first n natural numbers minus some number */

console.log(missingNumber1([0,1,3,4]));
console.log(missingNumber2([0,1,3,4]));
console.log(missingNumber3([0,1,3,4]));