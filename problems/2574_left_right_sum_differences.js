/* 
Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:
answer.length == nums.length.
answer[i] = |leftSum[i] - rightSum[i]|.
Where:
leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
Return the array answer.

1 <= nums.length <= 1000
1 <= nums[i] <= 105

Input: nums = [10,4,8,3]
Output: [15,1,11,22]
Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].

Input: nums = [1]
Output: [0]
Explanation: The array leftSum is [0] and the array rightSum is [0].
The array answer is [|0 - 0|] = [0].
*/


function leftRightDifference(nums) {
  let leftSum = 0;
  let rightSum = nums.reduce((sum, n) => sum + n, 0);
  const answer = [];
  
  for(let i = 0; i < nums.length; i++){
    answer.push(Math.abs(leftSum - (rightSum - nums[i])));
    leftSum += nums[i];
    rightSum -= nums[i];
  }

  return answer;
};

console.log(leftRightDifference([10,4,8,3]));
console.log(leftRightDifference([1]));
console.log(leftRightDifference([]));