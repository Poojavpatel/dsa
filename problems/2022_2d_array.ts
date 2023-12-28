/* 
You are given a 0-indexed 1-dimensional (1D) integer array original, and two integers, m and n. You are tasked with creating a 2-dimensional (2D) array with  m rows and n columns using all the elements from original.
The elements from indices 0 to n - 1 (inclusive) of original should form the first row of the constructed 2D array, the elements from indices n to 2 * n - 1 (inclusive) should form the second row of the constructed 2D array, and so on.
Return an m x n 2D array constructed according to the above procedure, or an empty 2D array if it is impossible.

Input: original = [1,2,3,4], m = 2, n = 2
Output: [[1,2],[3,4]]
Explanation: The constructed 2D array should contain 2 rows and 2 columns.
The first group of n=2 elements in original, [1,2], becomes the first row in the constructed 2D array.
The second group of n=2 elements in original, [3,4], becomes the second row in the constructed 2D array.

Input: original = [1,2,3], m = 1, n = 3
Output: [[1,2,3]]
Explanation: The constructed 2D array should contain 1 row and 3 columns.
Put all three elements in original into the first row of the constructed 2D array.

Input: original = [1,2], m = 1, n = 1
Output: []
Explanation: There are 2 elements in original.
It is impossible to fit 2 elements in a 1x1 2D array, so return an empty 2D array.
*/

function construct2DArray(
  original: number[],
  m: number,
  n: number
): number[][] {
  if (m * n !== original.length) {
    return [];
  }

  const newArray: number[][] = [];
  let subArray: number[] = [];
  let i: number = 0;
  let j: number = 0;
  let rowSeq: number = n;

  while (i <= original.length) {
    if (j < rowSeq) {
      subArray.push(original[i]);
    } else {
      newArray.push(subArray);
      subArray = [original[i]];
      rowSeq += n;
    }
    j++;
    i++;
  }

  return newArray;
}

console.log(construct2DArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3, 4)); // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ] ]
console.log(construct2DArray([1, 2, 3, 4], 2, 2)); // [ [ 1, 2 ], [ 3, 4 ] ]
console.log(construct2DArray([1, 2, 3], 1, 3)); // [ [ 1, 2, 3 ] ]
console.log(construct2DArray([1, 2], 1, 1)); // []
