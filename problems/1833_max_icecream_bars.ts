/* 
It is a sweltering summer day, and a boy wants to buy some ice cream bars.

At the store, there are n ice cream bars. You are given an array costs of length n, where costs[i] is the price of the ith ice cream bar in coins. The boy initially has coins coins to spend, and he wants to buy as many ice cream bars as possible. 

Note: The boy can buy the ice cream bars in any order.
Return the maximum number of ice cream bars the boy can buy with coins coins.

You must solve the problem by counting sort.
*/

/*
Greedy algorithm problem
*/

function countSort(arr: number[]): number[] {
  let max: number = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  const sortedArr: number[] = Array(max + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    sortedArr[arr[i]] += 1;
  }

  return sortedArr;
}

function maxIceCream(costs: number[], coins: number): number {
  let iceCreams = 0;

  const sortedCosts = countSort(costs);

  let i = 0;
  while (i < sortedCosts.length && coins > 0) {
    if (coins < sortedCosts[i] * i) {
      iceCreams += Math.floor(coins / i);
      break;
    }

    coins -= sortedCosts[i] * i;
    iceCreams += sortedCosts[i];
    i++;
  }

  return iceCreams;
}

console.log(maxIceCream([1, 3, 2, 4, 1], 7)); // 4
console.log(maxIceCream([10, 6, 8, 7, 7, 8], 5)); // 0
console.log(maxIceCream([1, 6, 3, 1, 2, 5], 20)); // 6
console.log(maxIceCream([4, 7, 6, 4, 4, 2, 2, 4, 8, 8], 41)); // 9
