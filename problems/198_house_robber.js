// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

// Feels like solution = max (sum of entries at even index , sum of entries at odd index) 
// but in case [99, 1, 2, 99, 5, 99, 4] this wont work 
// solution = max(99+2+5+4 = 110 , 1+99+99 = 199) = 199,  but real solution should be 99+99+99 = 297

[99, 1, 2, 99, 5, 99, 4] 

var rob = function (nums){
  let previousPreviousMax = 0;
  let  previousMax = nums[0];
  for(let i=1;i<nums.length;i++){
     let temp = previousMax;
     previousMax = Math.max(previousMax,previousPreviousMax + nums[i]);
     previousPreviousMax = temp;
  }
  return previousMax;
}

console.log(rob([99, 1, 2, 99, 5, 99, 4]))
