/* 
You are given an array of integers stones where stones[i] is the weight of the ith stone.
We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:
If x == y, both stones are destroyed, and
If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
At the end of the game, there is at most one stone left.
Return the weight of the last remaining stone. If there are no stones left, return 0.

Input: stones = [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.

Input: stones = [1]
Output: 1
*/

//          1
//     2          3
//  4    5     6     7
// 8 9 10 11 12 13 14 15

// 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15

/*
In a max-heap, 
left child node of n is at 2n+1
right child node of n is at 2n+2
left child root is at (n-1)/2
right child root is at n/2 - 1

root node should be greater than its child nodes
*/

class PriorityQueue {
  private values: number[];

  constructor() {
    this.values = [];
  }

  bubbleDown() {
    for (let i = 0; i < this.values.length; i++) {
      const root = this.values[i];
      if (this.values[2 * i + 1] > this.values[i]) {
        this.values[i] = this.values[2 * i + 1];
        this.values[2 * i + 1] = root;
      }
      if (this.values[2 * i + 2] > this.values[i]) {
        this.values[i] = this.values[2 * i + 2];
        this.values[2 * i + 2] = root;
      }
    }
  }

  insertElement(value: number) {
    /* add element to right most node, ie end of the array */
    this.values.push(value);
    if (this.values.length > 1) {
      this.bubbleDown();
    }
  }

  removeTop() {
    /* swap the root element with last entered element, remove the last element ie the root, bubble down the rest of tree */
    const root = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values[this.values.length - 1] = root;

    this.values.pop();
    this.bubbleDown();
  }
}

function lastStoneWeight(stones: number[]): number {
  const myQueue = new PriorityQueue();
  for (let i = 0; i < stones.length; i++) {
    myQueue.insertElement(stones[i]);
  }

  return stones[0];
}

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
