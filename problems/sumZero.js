/* 
Write a function 'sumZero' which accepts sorted array of integers,    
The function should return first pair where sum is 0,   
Return an array that includes both nos that sum upto 0 or undefined if pair doesnt exist    
sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]   
sumZero([-2, 0, 1, 3]) // undefined      
sumZero([-4, -3, -2, -1, 0, 1, 2, 5]) // [-2, 2]   
sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]) // [-3, 3]  
*/

// brute force
// nested loop ---> O(n*n)
function sumZero(arr=[]){
  for(let i=0; i < arr.length; i++){
    for(let j=i+1; j < arr.length; j++){
      if(arr[i] + arr[j] === 0){
        return [arr[i], arr[j]];
      }
    }
  }
}

// multiple pointers refactored
// while loop ---> O(n)
function sumZero(arr=[]){
  let left = 0;
  let right = arr.length -1;
  while(left < right){
    const sum = arr[left] + arr[right];
    if(sum === 0){
      return [arr[left], arr[right]];
    }
    sum > 0 ? right-- : left++ ;
  }
}


console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));
