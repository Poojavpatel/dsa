/* given two sorted arrays write a function that merges and return a sorted array
should run in O(n + m) time and space complexity */

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


console.log(merge([1, 10, 50], [2, 14, 99, 100]));
console.log(merge([1, 2, 50], [3, 7, 99, 100]));