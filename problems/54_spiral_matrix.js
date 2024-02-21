/*
Interview question in round2 for purplle
Leetcode medium - https://leetcode.com/problems/spiral-matrix/
*/

// Given an m x n matrix, return all elements of the matrix in spiral order.
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// right -> down -> left -> top
// i,j++ -> i++,j-> i,j-- -> i--,j

// [
//   [1 ,  2 ,  3 ,  4],
//   [5 ,  6 ,  7 ,  8],
//   [9 , 10 , 11 , 12]
// ]

// [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]

// right -> down  -> left  ->   up
// i j++ -> i++ j -> i j-- -> i-- j

function spiralOrder1(matrix) {
  const output = [];
  let i = 0;
  let j = 0;
  const rows = matrix.length;
  const columns = matrix[0].length;

  while (i >= 0 && i < rows && j >= 0 && j < columns) {
    output.push(matrix[i][j]);
    matrix[i][j] = "v";

    if (j + 1 < columns && matrix[i][j + 1] != "v") {
      // move right
      j++;
    } else if (i + 1 < rows && matrix[i + 1][j] != "v") {
      // move down
      i++;
    } else if (j - 1 >= 0 && matrix[i][j - 1] != "v") {
      // move left
      j--;
    } else if (i - 1 >= 0 && matrix[i - 1][j] != "v") {
      // move up
      i--;
    } else {
      break;
    }
  }

  return output;
}

// console.log(
//   spiralOrder1([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
//   ])
// );
// [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 10, 11, 7, 6, 5]; // This output is wrong

/*
Our solution above only works when we have 3 or less rows
For larger arrays we get wrong result

To understand how the program should work let us consider a huge array with 6 rows and 8 columns
[
  [1, 2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 31, 32],
  [33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48],
];

The traversing pattern will be 
Right 7, Down 5, Left 7, Up 4, Right 6, Down 3, Left 5, Up 2, Right 4, Down 1, Left 3

Right left pattern is 7 7 6 5 4 3
Up down pattern is    5 4 3 2 1

Lets have two variables for them, after first row, start decrementing their counts
*/

function spiralOrder(matrix) {
  const output = [];
  const rows = matrix.length; // 6
  const columns = matrix[0].length; // 8
  let rightLeftTraverse = columns - 1; // 7
  let upDownTraverse = rows - 1; // 5

  // First row
  for (let j = 0; j < columns - 1; j++) {
    output.push(matrix[0][j]);
  }

  // start from [0, 7]
  // down i++ for upDownTraverse, upDownTraverse--
  // left j-- for rightLeftTraverse, rightLeftTraverse--
  // up i-- for upDownTraverse, upDownTraverse--
  // right j++ for rightLeftTraverse, rightLeftTraverse--

  let i = 0;
  let j = rightLeftTraverse;
  let iterations = 0;

  while (rightLeftTraverse > 0 && upDownTraverse > 0) {
    // down
    iterations = upDownTraverse;
    while (iterations > 0) {
      output.push(matrix[i][j]);
      i++;
      iterations--;
    }
    upDownTraverse--;

    // left
    iterations = rightLeftTraverse;
    while (iterations > 0) {
      output.push(matrix[i][j]);
      j--;
      iterations--;
    }
    rightLeftTraverse--;

    // up
    iterations = upDownTraverse;
    while (iterations > 0) {
      output.push(matrix[i][j]);
      i--;
      iterations--;
    }
    upDownTraverse--;

    // right
    iterations = rightLeftTraverse;
    while (iterations > 0) {
      output.push(matrix[i][j]);
      j++;
      iterations--;
    }
    rightLeftTraverse--;

    console.log("upDownTraverse", upDownTraverse);
    console.log("rightLeftTraverse", rightLeftTraverse);
  }

  return output;
}

console.log(
  spiralOrder([
    [1, 2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31, 32],
    [33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48],
  ])
);
