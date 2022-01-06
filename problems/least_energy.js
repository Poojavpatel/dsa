// Find a pair of natural numbers who have the least energy among all pairs having sum of n
// input n 
// output least energy
// Input - 1000
// Output - 10 
// Explaination - 1000 = 500 + 500, energy of 500(5 + 0 + 0) = 5, hence energy = 5 + 5 = 10

// 6
// 2 + 4, 6
// 3 + 3, 6
// 1 + 5, 6

// 60
// 10 + 50, 6
// 30 + 30 - 6
// 40 + 20 - 6
// 12 + 48 -> 3 + 12 = 15

// 37 
// 10 + 27 -> 1 + 9 -> 10

// 55
// 10 + 45 -> 1 + 9 -> 10

// 99 
// 10 + 89 -> 1 + 17 -> 18

// 45
// 40 + 5 -> 4 + 5 -> 9

// 125
// 110 + 15 -> 2 + 6 -> 8

// 10 
// 2 + 8 -> 10

function leastEnergy(N) {
  // if no has 0s behind it remove them return sum of its digits
  let n = N;
  // while(n % 10 == 0){
  //   n = n/10;
  // }
  const ans = `${n}`.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  return ans == 1 ? 10 : ans;
}

console.log(leastEnergy(35));
console.log(leastEnergy(6));
console.log(leastEnergy(60));
console.log(leastEnergy(600));
console.log(leastEnergy(37));
console.log(leastEnergy(55));
console.log(leastEnergy(99));
console.log(leastEnergy(45));
console.log(leastEnergy(125));