/* Dynamic programming 

You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top. (1 step + 1 step or 2 steps)

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

// Brute Force - Time complexity O(2^n) Space complexity O(n*2)
var climbStairs = function(n) {
  if(n === 2) return 2;
  if(n === 1) return 1;
  if(n < 0) return 0;
  const result = climbStairs(n-1) + climbStairs(n-2);
  return result;
};

var climbStairsMemoized = function(n, memo={}) {
  if(n === 2) return 2;
  if(n === 1) return 1;
  if(n < 0) return 0;
  if(memo[n]) return memo[n];
  const result = climbStairsMemoized(n-1, memo) + climbStairsMemoized(n-2, memo);
  memo[n] = result;
  return result;
};

console.log(climbStairs(5)) // 8
console.log(climbStairs(8)) // 34
// console.log(climbStairs(50))
console.log(climbStairsMemoized(5)) // 8
console.log(climbStairsMemoized(8)) // 34
console.log(climbStairsMemoized(50)) // 20365011074