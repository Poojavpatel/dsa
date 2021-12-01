// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

const maxProfit = function(prices) {
  let a = 0;
  let b = 0;
  let c =  prices.length - 1;
  let d =  prices.length - 1;

  while(c - a > 1 && b < prices.length - 1  && d > 0){
    if(prices[b] < prices[a]) a = b;
    if(prices[d] > prices[c]) c = d;
    b++;
    d--;
  }
  return prices[c] > prices[a] ? prices[c] - prices[a] : 0;
};

console.log(maxProfit([ 7, 5, 6, 7, 8, 9, 2, 1, 100, 3, 6, 4 ])) // 99 (1 - 100) //
console.log(maxProfit([7,1,5,3,6,4])) // 5 (1 - 6)
console.log(maxProfit([7,6,4,3,1])) // 0 
console.log(maxProfit([7,1,5,3,6,100])) // 99 (1 - 100)
console.log(maxProfit([7,1,5,3,6,8])) // 7 (1 - 8)
console.log(maxProfit([7,6,4,3,100])) // 97 (3 - 100) //
console.log(maxProfit([100,6,4,3,1])) // 0 
// console.log(maxProfit([2,1,2,1,0,0,1])) // 1 
