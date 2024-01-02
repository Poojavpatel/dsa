/* This function should designate an element as pivot and rearrange elements such that values less then pivot are to the left and greater to the right
  The order of values on either side doesnt matter
  Should do this in place, DO NOT create new array
  when done return the index of the pivot */

function pivot(arr = [], start=0, end= arr.length-1){
  let pivot = arr[start];
  let smallerCount = 0;
  let swapTo = start + 1;
  for(let i = start; i<=end; i++){
    if(arr[i] < pivot){
      smallerCount++;
      [arr[swapTo], arr[i]] = [arr[i], arr[swapTo]];
      swapTo++;
    }
  }
  [arr[smallerCount], arr[start]] = [arr[start], arr[smallerCount]];
  console.log('-arr-', arr);
  return smallerCount;
}

console.log(pivot([4,8,2,1,5,7,6,3], 0)); // 3