/* 
Write a function 'same' which accepts two arrays, The function should return true if every value in the array has its corresponding value squared in second array,    
The frequency of values must be same   
same([1, 2, 3], [4, 1, 9]) // true
same([3, 4, 2], [4, 16]) // false
same([1, 2, 1], [4, 4, 1]) // false
*/

// brute force not considering duplicates
// indexOf O(n) forEach O(n) ---> O(n*n)
function same(arr1=[], arr2=[]){
  let result = true;
  arr1.forEach(value => {
    if(arr2.indexOf(value * value) < 0){
      result = false;
      return result;
    }
  });
  return result;
}

// to consider duplicates splice them off
// forEach O(n) indexOf O(n) splice O(n) ---> O(n*n)
function same(arr1=[], arr2=[]){
  let result = true;
  arr1.forEach(value => {
    const index = arr2.indexOf(value * value);
    if(index < 0){
      result = false;
      return result;
    }
    arr2.splice(index, 1);
  });
  return result;
}


// frequency counter refactored
// forEach O(n) ---> O(3n) ----> O(n)
function same(arr1=[], arr2=[]){
  const freq1 = {};
  const freq2 = {};
  arr1.forEach(val => freq1[val] ? (freq1[val] += 1) :  (freq1[val] = 1));
  arr2.forEach(val => freq2[val] ? (freq2[val] += 1) :  (freq2[val] = 1));
  for(let key in freq1){
    if(!freq2[key * key]){
      return false;
    }
    if(freq1[key] !== freq2[key * key]){
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([3, 4, 2], [4, 16]));
console.log(same([1, 2, 1], [4, 4, 1]));