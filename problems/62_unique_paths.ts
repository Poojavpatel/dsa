/*
Interview question in round1 for purplle
Leetcode medium - https://leetcode.com/problems/unique-paths/description/
*/

/*
There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
The test cases are generated so that the answer will be less than or equal to 2 * 109.

Input: m = 3, n = 7
Output: 28

Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
*/

/* During the interview I tried implementing using recursion, but faced some issues, so I implemented using stack */

function uniquePaths1(m: number, n: number): number {
  let paths = 0;
  const stack: [number, number][] = [[0, 0]];

  while (stack.length) {
    let [i, j]: [number, number] = stack.pop()!;

    // reached target
    if (i == m - 1 && j == n - 1) {
      paths++;
    } else {
      // right possible
      if (j + 1 < n) {
        stack.push([i, j + 1]);
      }

      // down possible
      if (i + 1 < m) {
        stack.push([i + 1, j]);
      }
    }
  }

  return paths;
}

// console.log(uniquePaths1(3, 2));
// console.log(uniquePaths1(3, 7));

/* This solution works fine, however space complexity increases as we need to save stack.
Same approach can be implemented using recursion, which will use call stack */

function uniquePaths2(m: number, n: number): number {
  let paths = 0;

  function move(i: number, j: number) {
    // reached target
    if (i == m - 1 && j == n - 1) {
      paths++;
    } else {
      // right possible
      if (j + 1 < n) {
        move(i, j + 1);
      }

      // down possible
      if (i + 1 < m) {
        move(i + 1, j);
      }
    }
  }

  move(0, 0);
  return paths;
}

// console.log(uniquePaths2(3, 2));
// console.log(uniquePaths2(3, 7));
// console.log(uniquePaths2(32, 12));

/* Works fine, exceeds time limit for m=32 n=12. Adding memoization to optimize time complexity */
function uniquePaths(m: number, n: number): number {
  const memo: number[][] = [];

  // Initialize memoization array with -1
  for (let i = 0; i < m; i++) {
    memo[i] = [];
    for (let j = 0; j < n; j++) {
      memo[i][j] = -1;
    }
  }

  function move(i: number, j: number): number {
    // Check if the result is already memoized
    if (memo[i][j] !== -1) {
      return memo[i][j];
    }

    // reached target
    if (i == m - 1 && j == n - 1) {
      memo[i][j] = 1;
    } else {
      let rightPaths: number = 0;
      let downPaths: number = 0;

      // right possible
      if (j + 1 < n) {
        rightPaths = move(i, j + 1);
      }

      // down possible
      if (i + 1 < m) {
        downPaths = move(i + 1, j);
      }

      // Save the result in the memoization array
      memo[i][j] = rightPaths + downPaths;
    }

    return memo[i][j];
  }

  return move(0, 0);
}

console.log(uniquePaths(3, 2));
console.log(uniquePaths(3, 7));
console.log(uniquePaths(32, 12));
