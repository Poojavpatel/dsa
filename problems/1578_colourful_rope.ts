/*
Alice has n balloons arranged on a rope. You are given a 0-indexed string colors where colors[i] is the color of the ith balloon.
Alice wants the rope to be colorful. She does not want two consecutive balloons to be of the same color, so she asks Bob for help. Bob can remove some balloons from the rope to make it colorful. You are given a 0-indexed integer array neededTime where neededTime[i] is the time (in seconds) that Bob needs to remove the ith balloon from the rope.
Return the minimum time Bob needs to make the rope colorful.

Input: colors = "abaac", neededTime = [1,2,3,4,5]
Output: 3
Explanation: In the above image, 'a' is blue, 'b' is red, and 'c' is green.
Bob can remove the blue balloon at index 2. This takes 3 seconds.
There are no longer two consecutive balloons of the same color. Total time = 3.

Input: colors = "abc", neededTime = [1,2,3]
Output: 0
Explanation: The rope is already colorful. Bob does not need to remove any balloons from the rope.

Input: colors = "aabaa", neededTime = [1,2,3,4,1]
Output: 2
Explanation: Bob will remove the ballons at indices 0 and 4. Each ballon takes 1 second to remove.
There are no longer two consecutive balloons of the same color. Total time = 1 + 1 = 2.
*/

/*
function minCost(colors: string, neededTime: number[]): number {
  let i: number = 0;
  let j: number = -1;
  let minCostInSeq: number = Infinity;
  let minCostSum: number = 0;

  while (i < colors.length) {
    if (colors[i] == colors[i + 1]) {
      if (j == -1) {
        j = i + 1;
      }
      if (colors[i] == colors[j]) {
        minCostInSeq = Math.min(neededTime[i], neededTime[j], minCostInSeq);
        j++;
      } else {
        minCostSum += minCostInSeq;
        i = j;
        j = -1;
      }
    } else {
      i++;
    }
  }

  return minCostSum;
}
*/

function minCost(colors: string, neededTime: number[]): number {
  let i: number = 0;
  let j: number = -1;
  let maxCostInSeq: number = 0;
  let sumOfSequence: number = 0;
  let minCostSum: number = 0;

  while (i < colors.length) {
    if (colors[i] == colors[i + 1]) {
      if (j == -1) {
        j = i;
      }
      if (colors[i] == colors[j]) {
        maxCostInSeq = Math.max(neededTime[j], maxCostInSeq);
        sumOfSequence += neededTime[j];
        j++;
      } else {
        minCostSum += sumOfSequence - maxCostInSeq;
        sumOfSequence = 0;
        maxCostInSeq = 0;
        i = j;
        j = -1;
      }
    } else {
      i++;
    }
  }

  return minCostSum;
}

console.log(minCost("rgbbbbr", [7, 9, 15, 7, 3, 8, 4])); // 18
console.log(minCost("abaac", [1, 2, 3, 4, 5])); // 3
console.log(minCost("abc", [1, 2, 3])); // 0
console.log(minCost("aabaa", [1, 2, 3, 4, 1])); // 2
console.log(minCost("bbbaaa", [4, 9, 3, 8, 8, 9])); // 23
