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
parent is at (n-1)/2

root node should be greater than its child nodes
*/

class MaxHeap {
  private _values: number[];

  constructor() {
    this._values = [];
  }

  get length() {
    return this._values.length;
  }

  get values() {
    return this._values;
  }

  insert(value: number) {
    /* add element to right most node, ie end of the array */
    this._values.push(value);

    if (this._values.length > 1) {
      this.bubbleUp();
    }
  }

  bubbleUp() {
    /* start comparing from leaf nodes to the root node (end to array to start of array) */
    let index = this.values.length - 1;
    let value = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (value <= parent) break;
      this.values[parentIndex] = value;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  extractMax(): number {
    const max = this._values[0];
    const mostRecent = this._values.pop()!;
    if (this.values.length) {
      this._values[0] = mostRecent;
      this.bubbleDown();
    }
    return max;
  }

  bubbleDown() {
    /* start comparing from root node to leaf nodes (start of array to end of array) */
    let n = 0;
    const element = this.values[0];
    while (true) {
      let leftIndex = 2 * n + 1;
      let rightIndex = 2 * n + 2;
      let swap = false;
      let maxIndex = this.values[rightIndex]
        ? this.values[leftIndex] > this.values[rightIndex]
          ? leftIndex
          : rightIndex
        : leftIndex;

      if (this.values[n] < this.values[maxIndex]) {
        swap = true;
        this.values[n] = this.values[maxIndex];
        this.values[maxIndex] = element;
        n = maxIndex;
      }

      if (!swap) break;
    }
  }
}

function lastStoneWeight(stones: number[]): number {
  const myHeap = new MaxHeap();
  for (let i = 0; i < stones.length; i++) {
    myHeap.insert(stones[i]);
  }

  while (myHeap.length > 1) {
    const stone1 = myHeap.extractMax();

    const stone2 = myHeap.extractMax();

    const difference = Math.abs(stone2 - stone1);

    myHeap.insert(difference);
  }

  return myHeap.length ? myHeap.values[0] : 0;
}

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log(lastStoneWeight([9, 3, 2, 10]));
