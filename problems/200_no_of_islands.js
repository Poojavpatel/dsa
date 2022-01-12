// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Solution 
// for(elements in array){
//   if element == 1, mark it as visited, mark all 1 around it as visited (use queue for keeping track of who all to visit)
//   since we saw an island, island ++
// }

function islands(grid) {
  const rows = grid.length;
  const columns = grid[0].length;
  let islands = 0;

  function markAllLandAround(i, j){
    let queue = [[i,j]];
    while (queue.length){
      const check = queue.pop();
      const i = check[0];
      const j = check[1];
      grid[i][j] = 'v';
      if(i-1 >= 0 && i-1 < rows && grid[i-1][j] == '1') queue.push([i-1,j]);
      if(i+1 >= 0 && i+1 < rows && grid[i+1][j] == '1') queue.push([i+1,j]);
      if(j+1 >= 0 && j+1 < columns && grid[i][j+1] == '1') queue.push([i,j+1]);
      if(j-1 >= 0 && j-1 < columns && grid[i][j-1] == '1') queue.push([i,j-1]);
    }
  }

  for(let i = 0;i< rows;i++){
    for(let j = 0;j< columns;j++){
      const element = grid[i][j];
      if(element == '1'){
        grid[i][j] = 'v';
        markAllLandAround(i,j);
        islands++;
      }
    }
  }
  return islands;
}

console.log(islands(
  [
    ["0","1","0","0","0"],
    ["0","0","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","0","1"]
  ]
)) // 3

console.log(islands(
  [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
)) // 1

console.log(islands(
  [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","1"]
  ]
)) // 3

console.log(islands(
  [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
)) // 3


