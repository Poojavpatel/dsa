/* Since Fibonacci Sequence has both overlapping subproblems and optimal substructure we can solve it using dynamic programming
solving it first using recursion - O(2 ^ n) which is Terrible
then optimising using dynamic programming
using memoization - O(n-2) -> O(n)
memo for n=10 is [ <3 empty items>, 2, 3, 5, 8, 13, 21, 34 ]
using Tabulation - O(n)
*/

function fib(n){
  if(n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}

// storing the results in memo and passing it to every call
function memoizedFib(n, memo = []){
  console.log(memo);
  if(n <= 2) return 1;
  if(memo[n]) return memo[n];
  var result = memoizedFib(n-1, memo) + memoizedFib(n-2, memo);
  memo[n] = result;
  return result;
}

// bottom up approch
function tabulatedFib(n){
  if(n <= 2) return 1;
  var fibNums = [0,1,1];
  for(var i=3 ; i <= n ; i++){
    fibNums[i] = fibNums[i-1] + fibNums[i-2]; 
  }
  return fibNums[n];
}

// console.log(fib(6));
// console.log(fib(20));
// console.log(memoizedFib(6));
// console.log(memoizedFib(20));
console.log(tabulatedFib(6));
console.log(tabulatedFib(20));