/* 
This leetcode hard question was asked in Tech round 2 of prismforce
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const result = [];
  let i = 0;
  let j = 0;
  let localMax = -Infinity;

  while (i < nums.length && j <= nums.length) {
    if (j < i + k) {
      if (nums[j] > localMax) {
        localMax = nums[j];
      }
      j++;
    } else {
      result.push(localMax);
      localMax = -Infinity;
      i++;
      j = i;
    }
  }

  return result;
};

// var maxSlidingWindow = function(nums, k) {
//     const result = [];
//     let i = 0;
//     let localMax = -Infinity;

//     while(i < k){
//         if(nums[i] > localMax){
//             localMax = nums[i];
//         }
//         i++;
//     }
//     result.push(localMax);

//     i = k;
//     while (i < nums.length){
//         if(nums[i] > localMax){
//             localMax = nums[i];
//         }
//         result.push(localMax);
//         i++;
//     }

//     return result;
// };
