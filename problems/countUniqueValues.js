/* 
Write a function 'countUniqueValues' which accepts **sorted array** of integers, and counts unique values in the array    
countUniqueValues([1, 1, 1, 1, 1, 3, 3, 5]) // 3 
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7      
countUniqueValues([]) // 0  
countUniqueValues([-2, -1, -1, 0, 1]) // 4   
*/

// brute force - use set or maybe hash n increase count when new value put into hash
function countUniqueValues(arr=[]){
  const set = new Set(arr);
  return set.size;
}

// multiple pointers refactored ---> O(n)
function countUniqueValues(arr=[]){
  let count = 0;
  let ptr1 = 0;
  let ptr2 = 1;
  while(ptr2 <= arr.length){
    if(arr[ptr1] === arr[ptr2]){
      ptr2++;
    } else {
      count++;
      ptr1 = ptr2;
      ptr2++;
    }
  }
  return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 3, 3, 5]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
