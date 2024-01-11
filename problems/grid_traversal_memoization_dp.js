/* 
Say you are a traveller on a 2D grid.
You begin in the top left corner and your goal is to reach the bottom right corner
You may only move down or right
In how many ways can you travel to the goal given dimension of the grid are m*n
*/

/*
Consider a (4,3) dimension grid
if we travel right we need to travel a grid with dimension (4,2), if we travel down we need to travel a grid with dimension (3,3)
if we reach grid dimension (1,1) it indicates that we reached the goal
if we reach (m,0) or (0,n) indicates that we reached the end and it can no longer be traversed
At every point we can eliminate either the top or left part of current sub grid, which makes it simillar to fibonacci when visualised as a tree
*/

// Brute Force 
function gridTraversal(m,n) {
  if(m===1 && n===1) return 1;
  if(m===0 || n===0) return 0;
  return gridTraversal(m,n-1) + gridTraversal(m-1,n);
}
// Time complexity of Brute Force solution is O(2 raised to (m+n)) and space complexity is O(m+n) 

// optimised using memoisation
function gridTraversal(m,n,memo={}) {
  const key = m + ',' + n;
  // if key already exist in memo return value
  if(key in memo) return memo[key];
  if(m===1 && n===1) return 1;
  if(m===0 || n===0) return 0;
  const result = gridTraversal(m,n-1) + gridTraversal(m-1,n);
  memo[key] = result;
  return result;
}
// Time complexity of memoized solution is O(m*n) and space complexity is O(m+n)