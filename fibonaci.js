/* using recursion write a function that returns nth no in fibonaci series 
Fibonaci seq - 1, 1, 2, 3, 5, 8, 13
fib(4) // 3
fib(5) // 5
fib(10) // 55
fib(28) // 317811
*/

function fib(n){
  if(n <= 2) return 1;
  return fib(n-1) + fib(n - 2);
}