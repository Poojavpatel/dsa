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