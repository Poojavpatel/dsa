// You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:
// numberOfBoxesi is the number of boxes of type i.
// numberOfUnitsPerBoxi is the number of units in each box of the type i.
// You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. 
// You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.
// Return the maximum total number of units that can be put on the truck.

// Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
// Output: 8
// Explanation: There are:
// - 1 box of the first type that contains 3 units.
// - 2 boxes of the second type that contain 2 units each.
// - 3 boxes of the third type that contain 1 unit each.
// You can take all the boxes of the first and second types, and one box of the third type.
// The total number of units will be = (1 * 3) + (2 * 2) + (1 * 1) = 8.

// Input: boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10
// Output: 91

// since we want max units with least boxes, we will sort boxes by no of units descendingly 
// then select max of first box and keep selecting max till truck size

const maxUnits = function (boxTypes, truckSize) {
  // const sortedBoxes = boxTypes.sort((a, b) => b[1] - a[1]);
  const sortedBoxes = countSortNested(boxTypes, 1000);
  let maxUnits = 0;
  let index = 0;
  while(truckSize > 0 && index < sortedBoxes.length){
    const noOfBoxes = sortedBoxes[index][0] > truckSize ? truckSize : sortedBoxes[index][0];
    maxUnits += (noOfBoxes * sortedBoxes[index][1]);
    truckSize -= noOfBoxes;
    index++;
  }
  return maxUnits;
}

console.log(maxUnits([[5,10],[2,5],[4,7],[3,9]], 10));   // 91
console.log(maxUnits([[1,3],[2,2],[3,1]], 4));   // 8
console.log(maxUnits([[1,3],[5,5],[2,5],[4,2],[4,1],[3,1],[2,2],[1,3],[2,5],[3,2]], 35));   // 8