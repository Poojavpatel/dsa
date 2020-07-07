/* 
write a function maxSubarraySum which accepts an array of integers and a number called n.  
The function should calculate the maximum sum of n consequitive elements in an array.  
maxSubarraySum([1,2,5,2,8,1,5], 2) // 10  
maxSubarraySum([1,2,5,2,8,1,5]) // 17  
maxSubarraySum([4,2,1,6]) // 6  
maxSubarraySum([4,2,1,6,2]) //  13    
*/

// brute force --> O(n*m)
function maxSubarraySum(arr=[], num){
  if(num > arr.length) { return null }
  let max = -Infinity;
  for(var i=0; i<= arr.length - num ; i++ ){
    let temp = 0
    for(j=i ; j< i + num ; j++){
      temp += arr[j];
    }
    max = (temp > max) ? temp : max;
  }
  return max;
}

// sliding window --> O(m + n)
function maxSubarraySum(arr=[], num){
  if(num > arr.length) { return null }
  let max = 0;
  let tempSum = 0;
  for(var i=0; i< num ; i++){
    tempSum += arr[i];
  }
  max = (tempSum > max) ? tempSum : max;
  for(var j=num ; j<arr.length ; j++){
    tempSum = tempSum + arr[j] - arr[j-num];
    max = (tempSum > max) ? tempSum : max;
  }
  return max;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5], 2));
console.log(maxSubarraySum([1,2,5,2,8,1,5], 4));
console.log(maxSubarraySum([4,2,1,6], 1));
console.log(maxSubarraySum([4,2,1,6,2], 4));
