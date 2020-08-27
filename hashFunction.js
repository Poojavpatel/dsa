function hash(key, limit=100){
  let total = 0;
  for(var i of key){
    total += i.charCodeAt(0) - 96;
  }
  return total%limit;
}

console.log(hash('pink', 10)); // 0
console.log(hash('cyan', 10)); // 3
console.log(hash('maroon', 10)); // 6
console.log(hash('orange', 10)); // 0