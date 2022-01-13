// using a second array
// const rotate = (arr) => {
//   const noOfRows = arr.length;
//   const noOfColumns = arr[0].length;
//   const result = [];

//   for(let i = 0; i < noOfRows; i++){
//     for(let j=0; j < noOfColumns; j++) {
//       if(!result[i]) result[i] = [];
//       result[i][j] = arr[noOfColumns - (j + 1)][i];
//     }
//   }
//   return result;
// }

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
const rotate = (arr) => {
  const noOfRows = arr.length;
  const noOfColumns = arr[0].length;
  const result = [];
  return arr.reverse();

  // for(let i = 0; i < noOfRows; i++){
  //   for(let j=0; j < noOfColumns; j++) {
  //     if(!result[i]) result[i] = [];
  //     result[i][j] = arr[j][i];
  //   }
  // }
  // return result;
}


console.log(rotate([[1,2,3],[4,5,6],[7,8,9]])) // [[7,4,1],[8,5,2],[9,6,3]]
// console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])) // [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
// console.log(rotate([[1,2,3],[4,5,6],[7,8,9]])) // [[7,4,1],[8,5,2],[9,6,3]]
// console.log(rotate([[1]])) // [[1]]
// console.log(rotate([[1,2],[3,4]])) // [[3,1],[4,2]]

// 7  4  1
// 8  5  2
// 9  6  3

// 1  2  3
// 4  5  6
// 7  8  9

// 1  4  7
// 2  5  8
// 3  6  9

// Solution - Take transpose and then mirror image