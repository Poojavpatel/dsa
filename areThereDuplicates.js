
function areThereDupliactes(...arr){
  const freq ={};
  for(var key in arr){
      var letter = arr[key];
      freq[letter]? freq[letter] += 1 : freq[letter] =1 ;
  }
  console.log('-freq-', JSON.stringify(freq));
  for(var keys in freq){
      if(freq[keys]>1){
          return true;
      }
  }
  return false;
}

console.log(areThereDupliactes(1,2,3)); // false
console.log(areThereDupliactes(1,2,2)); // true
console.log(areThereDupliactes(1)); // false
console.log(areThereDupliactes('a', 'b', 'c', 'd')); // false
console.log(areThereDupliactes('a', 'b', 'c', 'a')); // true
console.log(areThereDupliactes('a')); // false