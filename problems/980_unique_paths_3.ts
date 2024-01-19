/* 
Hard leetcode problem

You are given an m x n integer array grid where grid[i][j] could be:

1 representing the starting square. There is exactly one starting square.
2 representing the ending square. There is exactly one ending square.
0 representing empty squares we can walk over.
-1 representing obstacles that we cannot walk over.
Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.

Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
Output: 2
Explanation: We have the following two paths: 
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)

Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
Output: 4
Explanation: We have the following four paths: 
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)

Input: grid = [[0,1],[2,0]]
Output: 0
Explanation: There is no path that walks over every empty square exactly once.
Note that the starting and ending square can be anywhere in the grid.

Constraints
m == grid.length
n == grid[i].length
1 <= m, n <= 20
1 <= m * n <= 20
-1 <= grid[i][j] <= 2
There is exactly one starting cell and one ending cell.
*/

/* 
Approach : 
This is a backtracking problem
Visualizing it as a tree, we start from the position where 1 is, from there we push all valid directions to stack, and so on
We stop once we reach goal, or there is no node left to traverse

First traverse through the array and find out the starting position

From one node, we can at max go in 4 directions, up down left or right. We cant go to a direction if 
- no node in that direction, ie i or j > length
- its already visited
- Its starting point
- Its goal // increment count and return when we find goal
- its an obstacle

On visiting a node mark it as 'v', at the end once we reach goal, we need to see if all 0 are now 'v', ie there is no 0 left in the array

On reaching goal
- check if all nodes are visited
- increment count
- return from the recursion loop (do not explore the path any further)
*/

function uniquePaths3(grid: number[][]) {
  let rows: number = grid.length;
  let columns: number = grid[0].length;
  let paths: number = 0;

  function getStartingPositionAndSquares(): {
    x: number;
    y: number;
    squares: number;
  } {
    const result = { x: 0, y: 0, squares: 0 };
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (grid[i][j] == 1) {
          result.x = i;
          result.y = j;
          result.squares += 1;
        }
        if (grid[i][j] == 0) {
          result.squares += 1;
        }
      }
    }
    return result;
  }

  const startPosition = getStartingPositionAndSquares();

  function isValidStep(x: number, y: number) {
    if (
      0 <= x &&
      x < rows &&
      y >= 0 &&
      y < columns &&
      (grid[x][y] == 0 || grid[x][y] == 2)
    ) {
      return true;
    }
    return false;
  }

  function goAhead(x: number, y: number, visited: number) {
    /* We reach goal, if grid[x][y] == 2 and all nodes are visited */
    if (grid[x][y] == 2 && visited == startPosition.squares) {
      paths += 1;
    }

    /* Mark current node as visited */
    grid[x][y] = 100;

    /* leftPosition */
    if (isValidStep(x, y - 1)) {
      return goAhead(x, y - 1, visited + 1);
    }
    /* rightPosition */
    if (isValidStep(x, y + 1)) {
      return goAhead(x, y + 1, visited + 1);
    }
    /* upPosition */
    if (isValidStep(x - 1, y)) {
      return goAhead(x - 1, y, visited + 1);
    }
    /* downPosition */
    if (isValidStep(x + 1, y)) {
      return goAhead(x + 1, y, visited + 1);
    }
    return;
  }

  goAhead(startPosition.x, startPosition.y, 0);

  return paths;
}

// console.log(
//   uniquePaths3([
//     [1, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 2],
//   ])
// );

/* 
Current solution of marking every visited square, and moving in all possible directions from one point has one limitation
1  2  3  4
8  7  6  5
9 10 11 12
After following this path, the resultant grid is [[100, 100, 100, 100][100, 100, 100, 100][100, 100, 100, 2]]
Since all paths are marked visited, the function stops, as there is no way to go
So only one path is explored from start to finish
Since we want to count all possible paths, we will need to not mark as visited in global grid, infact make copies of gird and pass to recursive function
Let's follow the backtracking template

making copies of gird and passing to recursive function did not work, gave the exact same result as before
Instead we will create a set visited, and add visited nodes to it, and delete from the set once its done
*/

function uniquePathsThree(grid: number[][]) {
  const rows: number = grid.length;
  const columns: number = grid[0].length;
  let paths: number = 0;
  let visited = new Set();

  function getStartingPositionAndToVisit(): {
    x: number;
    y: number;
    toVisit: number;
  } {
    const result = { x: 0, y: 0, toVisit: 0 };

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (grid[i][j] == 1) {
          result.x = i;
          result.y = j;
          result.toVisit += 1;
        }
        if (grid[i][j] == 0 || grid[i][j] == 2) {
          result.toVisit += 1;
        }
      }
    }
    return result;
  }

  function isValidStep(x: number, y: number) {
    if (
      0 <= x &&
      x < rows &&
      y >= 0 &&
      y < columns &&
      (grid[x][y] == 0 || grid[x][y] == 2) &&
      !visited.has(`${x}${y}`)
    ) {
      return true;
    }
    return false;
  }

  function goAhead(x: number, y: number) {
    /* We reach goal, if grid[x][y] == 2 and all nodes are visited */
    if (grid[x][y] == 2) {
      if (visited.size == startPosition.toVisit) {
        paths += 1;
      }
      /* return if we reach goal and all nodes are not explored */
      return;
    }

    /* rightPosition */
    if (isValidStep(x, y + 1)) {
      visited.add(`${x}${y + 1}`);
      goAhead(x, y + 1);
      visited.delete(`${x}${y + 1}`);
    }
    /* leftPosition */
    if (isValidStep(x, y - 1)) {
      visited.add(`${x}${y - 1}`);
      goAhead(x, y - 1);
      visited.delete(`${x}${y - 1}`);
    }
    /* downPosition */
    if (isValidStep(x + 1, y)) {
      visited.add(`${x + 1}${y}`);
      goAhead(x + 1, y);
      visited.delete(`${x + 1}${y}`);
    }
    /* upPosition */
    if (isValidStep(x - 1, y)) {
      visited.add(`${x - 1}${y}`);
      goAhead(x - 1, y);
      visited.delete(`${x - 1}${y}`);
    }
  }

  const startPosition = getStartingPositionAndToVisit();

  visited.add(`${startPosition.x}${startPosition.y}`);

  goAhead(startPosition.x, startPosition.y);

  return paths;
}

// console.log(
//   uniquePathsThree([
//     [1, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 2],
//   ])
// );

// console.log(
//   uniquePathsThree([
//     [1, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 2, -1],
//   ])
// );

console.log(
  uniquePathsThree([
    [0, 1],
    [2, 0],
  ])
);
