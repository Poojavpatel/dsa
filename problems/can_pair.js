// Q.Given an array of integers and a number k, write a function that returns true if the given array can be divided into pairs such that the sum of every pair is divisible by k.

// Input: arr = [9, 7, 5, 3], k = 6 
// Output: true 
// We can divide the array into (9, 3) and 
// (7, 5). Sum of both of these pairs 
// is a multiple of 6.

// Input: arr = [1,2,3,4,5,6], k = 10
// [‘v’,’v’,’v’,v,v,1]
// Output: false 

// Input: arr =[1,2,3,4,5,10,6,7,8,9], k = 5

// Output: true 

// Input: arr = [9, 7, 5, 3, 1], k = 6 
// Output: false 

// Input: arr = [-1,1,-2,2,-3,3,-4,4], k = 3
// Output: true




function isDivisible(numbers, k) {
  let i = 0;
  let j = i+1;
  let marked = 0;
  while(i < numbers.length && j < numbers.length){
    if(numbers[i] == 'v'){
      i++;
    }
    if(numbers[j] == 'v'){
      j++;
    }
    if((numbers[j] + numbers[i]) > 0 && (numbers[j] + numbers[i] + k) % k == 0){
      numbers[i] = 'v';
      numbers[j] = 'v';
      marked+= 2;
      i++;
      j = i + 1;
    } else {
      j++;
    }
    console.log('numbers', numbers);
  }
  console.log('numbers', numbers);
  return marked == numbers.length;
}

console.log(isDivisible([-1,1,-2,2,-3,3,-4,4], 3))