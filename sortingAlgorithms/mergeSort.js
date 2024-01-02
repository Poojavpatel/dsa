function mergeSort(arr) {
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(a=[], b=[]) {
  const sorted = [];
  let i = 0; let j = 0;
  
  while(a[i] && b[j]){
    if(a[i] <= b[j]){
      sorted.push(a[i]);
      i++;
    } else {
      sorted.push(b[j]);
      j++;
    }
  }
  while(a[i]){
    sorted.push(a[i]);
    i++;
  }
  while(b[j]){
    sorted.push(b[j]);
    j++;
  }
  return sorted;
}

console.log(mergeSort([1,50,99,2,7,104,37,4]));
console.log(mergeSort([2,3,4,7,99,5,6,36,55,0]));
console.log(mergeSort([3,4,7,2]));