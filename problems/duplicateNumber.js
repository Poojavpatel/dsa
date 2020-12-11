function duplicateNumber(nums=[]){
  const n = nums.length;
  const sum = (n*(n-1))/2;
  const arrSum = nums.reduce((total,num) => { return total+num; },0);
  return arrSum - sum;
}

console.log(duplicateNumber([2,1,3,4,3]));
// console.log(duplicateNumber([2,2,2,2]));