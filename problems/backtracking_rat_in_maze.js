// A Maze is N*N binary matrix of blocks, Gray blocks are dead ends (value = 0)
// where source block is maze[0][0] and destination block is maze[N-1][N-1]
// A rat starts from source and has to reach the destination.
// The rat can move only in two directions forward and down. 

// const ratMaze = (maze) => {
//   const destination = [maze.length - 1, maze[0].length - 1];
//   const pathFound = (position) => {
//     if(position == destination) return true;
//     const optionsFromPosition = getOptionsFromPosition(position);
//     for(let i=0; i < optionsFromPosition.length; i++){
//       const wasPathFound = pathFound();
//       if(wasPathFound) return true;
//     }
//     return false;
//   }
// }

console.log(ratMaze([[1, 1, 0, 1], [1, 1, 0, 1], [1, 1, 0, 0], [0, 1, 1, 1]]));