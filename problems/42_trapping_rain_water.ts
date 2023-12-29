/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Input: height = [4,2,0,3,2,5]
Output: 9
*/

/*
Approach 
Water that can be held on ith position = Minimum of (max height of the left side, max height on the right side) - height of the ith element
Instead of again and again calculating max of elements on left, create a maxYetOnLeft array
Similarly create a maxYetOnRight array
*/

function trap(height: number[]): number {
  let totalWater: number = 0;
  const maxHeightOnLeft: number[] = [];
  const maxHeightOnRight: number[] = [];

  for (let i = 0; i < height.length; i++) {
    maxHeightOnLeft[i] =
      maxHeightOnLeft[i - 1] > height[i] ? maxHeightOnLeft[i - 1] : height[i];
  }

  for (let i = height.length - 1; i >= 0; i--) {
    maxHeightOnRight[i] =
      maxHeightOnRight[i + 1] > height[i] ? maxHeightOnRight[i + 1] : height[i];
  }

  for (let i = 0; i < height.length; i++) {
    totalWater += Math.min(maxHeightOnLeft[i], maxHeightOnRight[i]) - height[i];
  }

  return totalWater;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([4, 2, 0, 3, 2, 5])); // 9
console.log(trap([0, 1, 0, 1, 0, 1])); // 2
