/* 
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
*/

function search(nums: number[], target: number): number {
  let left: number = 0;
  let right: number = nums.length - 1;
  let center: number;

  while (left <= right) {
    center = Math.floor(right - left / 2);
    if (nums[center] == target) {
      return center;
    }
    if (nums[center] < target) {
      /* search right half */
      left = center + 1;
    } else {
      /* search left half */
      right = center - 1;
    }
  }

  return -1;
}

console.log(
  search([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 9)
);
console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
console.log(search([5], 5));
