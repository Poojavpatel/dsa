// function hash(key, limit=100){
//   let total = 0;
//   for(var i of key){
//     total += i.charCodeAt(0) - 96;
//   }
//   return total%limit;
// }

function hash(key, limit=100){
  let total = 0;
  let PRIME = 31;
  for(var i =0; i<Math.min(key.length, 100); i++){
    let value = key[i].charCodeAt(0) - 96;
    total = (total * PRIME + value) % limit;
  }
  return total%limit;
}

console.log(hash('pink', 10)); // 0
console.log(hash('cyan', 10)); // 3
console.log(hash('maroon', 10)); // 6
console.log(hash('orange', 10)); // 0

console.log(hash('pink', 13)); // 5
console.log(hash('cyan', 13)); // 5
console.log(hash('maroon', 13)); // 11
console.log(hash('orange', 13)); // 10