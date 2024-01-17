/*
Interview question for Gradright

Given an array, return true if any combination of elements in the array add up to the largest number in the array. return false otherwise

Eg [4,6,2,3,23,10,5] - true
as 4,6,3,10 add upto 23

[5,6,23,15] - false

[23,20,3,5] - true
*/

/*
First find out max in the array ie 23 
then remove the max element, by swapping with last element and pop
with the remaining array, do target sum using dp or backtracking 
*/

/* 
Solving target sum using backtracking
array = [4,6,2,3,10,5] targetSum = 23

To solve this backtracking problem we visualize it as a tree
Each element can be included in sum or excluded

                                                0
                          4                                            0
              4+6                 4+0                      0+6                     0+0
        4+6+2      4+6+0     4+0+2    4+0+0          0+6+2     0+6+0         0+0+2      0+0+0

We start from sum 0, on the left node we consider 4 included, on right we consider not included
in the next level we consider 6 included on left and 6 not included on right
so on and so forth
If at any point sum > 23, we stop processing that node 
*/

/*
Backtracking problems are solved by DFS, so lets try solving using stack
The above problem is very big and long, lets take simpler problem
[7,6,2,3] targetSum = 11 
0+0+6+2+3 will be the solution path
0+7+6 path should be not explored as 13 > 11
*/

function targetSum(arr, target) {
  /* stack will contain [currentSum, index+1] */
  const stack = [[0, 0]];

  /*
    stack = [
      [0+0+6, 2]
      [0+0+0, 2]
      -[0+7+0+0+3, 4]-
      -[0+7+0+0+0, 4]-
      -[0+7+0+2+3, 4]-
      -[0+7+0+2+0, 4]-
      -[0+7+0+2, 3]-
      -[0+7+0+0, 3]-
      -[0+7+6, 2]-
      -[0+7+0, 2]-
      -[0+7, 1]-
      -[0+0, 1]-
      [0, 0]
    ]
  */

  while (stack.length > 0) {
    const [currentSum, currentIndex] = stack.pop();

    if (currentSum > target) {
      continue;
    }

    if (currentSum == target) {
      return true;
    }

    if (currentIndex < arr.length) {
      /* Pushing the right of tree in stack */
      stack.push([currentSum + 0, currentIndex + 1]);

      /* Push left of tree in stack */
      stack.push([currentSum + arr[currentIndex], currentIndex + 1]);
    }
  }

  return false;
}

console.log(targetSum([7, 6, 2, 3], 11));
