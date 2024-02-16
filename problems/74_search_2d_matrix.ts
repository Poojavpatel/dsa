/*
You are given an m x n integer matrix matrix with the following two properties:
Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
*/

function searchMatrix(matrix: number[][], target: number): boolean {
  let left = 0;
  let right = matrix.length - 1;
  let center;
  let innerLeft = 0;
  let innerRight = Infinity;
  let innerCenter;

  while (left <= right) {
    center = Math.floor((right - left) / 2);
    innerRight = matrix[center].length - 1;

    if (left == right) {
      /* search this array */
      innerRight = matrix[right].length - 1;

      while (innerLeft <= innerRight) {
        innerCenter = Math.floor((innerRight - innerLeft) / 2) + innerLeft;

        if (matrix[center][innerCenter] == target) {
          return true;
        }
        if (target < matrix[center][innerCenter]) {
          /* search left half */
          innerRight = innerCenter - 1;
        } else {
          /* search right half */
          innerLeft = innerCenter + 1;
        }
      }
      return false;
    }

    if (target < matrix[center][innerLeft]) {
      /* search left half */
      right = center - 1;
    } else if (target > matrix[center][innerRight]) {
      /* search right half */
      left = center + 1;
    } else {
      /* search this array */
      innerRight = matrix[right].length - 1;

      while (innerLeft <= innerRight) {
        innerCenter = Math.floor((innerRight - innerLeft) / 2) + innerLeft;

        if (matrix[center][innerCenter] == target) {
          return true;
        }
        if (target < matrix[center][innerCenter]) {
          /* search left half */
          innerRight = innerCenter - 1;
        } else {
          /* search right half */
          innerLeft = innerCenter + 1;
        }
      }
      return false;
    }
  }

  return false;
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    7
  )
);
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    23
  )
);
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    16
  )
);
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    34
  )
);
