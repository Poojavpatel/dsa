function pivot(arr = [], start=0, end=arr.length-1){
  let pivot = arr[start];
  let smallerCount = 0;
  let swapTo = start + 1;
  for(let i = start+1; i<=end; i++){
    if(arr[i] < pivot){
      smallerCount++;
      [arr[swapTo], arr[i]] = [arr[i], arr[swapTo]];
      swapTo++;
    }
  }
  [arr[smallerCount], arr[start]] = [arr[start], arr[smallerCount]];
  return smallerCount;
}

function quickSort(arr, left=0, right=arr.length-1) {
  if(left<right){
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex-1);
    quickSort(arr, pivotIndex+1, right);
  }
  return arr;
}

console.log(quickSort([4,8,2,1,5,7,6,3]));