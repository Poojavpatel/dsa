// Given an m x n matrix, return all elements of the matrix in spiral order.
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

[
  [1 , 2 , 3], 
  [4 , 5 , 6], 
  [7 , 8 , 9]
]

// right -> down -> left -> top
// i,j++ -> i++,j-> i,j-- -> i--,j

// [
//   [1 ,  2 ,  3 ,  4],  
//   [5 ,  6 ,  7 ,  8],  
//   [9 , 10 , 11 , 12]
// ]

[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]

// wip
function spiralMatrix(matrix){
  let output = [];
  let rows = matrix.length;
  let columns = matrix[0].length;
  let direction = 'right';
  let i = 0;
  let j = 0;
  while(true){
    // if(j < columns) {
    //   j++;
    // } else {
    //   i--;
    // }
    // if(i >= rows){
    //   j--;
    // }
    // if(j < 0){
    //   i--;
    // }
    output.push(matrix[i][j]);
    matrix[i][j] = 'v';
    if(direction == 'right' && j < columns){
      j++;
    }

  }
}