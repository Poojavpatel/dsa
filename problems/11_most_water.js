const mostWater = (height=[]) => {
  let maxArea = 0;
  for(let i=0; i<height.length; i++){
    for(let j=0; j < height.length; j++){
      if(i == j) continue;
      const min = height[i] < height[j] ? height[i] : height[j];
      const area = min * (j - i);
      if(area > maxArea){
        // console.log('--min-', min);
        // console.log('--j-', j);
        // console.log('--i-', i);
        // console.log('--j - i-', j - i);
        maxArea = area;
      }
    }
  }
  return maxArea;
}

// leetcode solutions
// var maxArea = function(height) {
//   let l = 0, r = height.length - 1
//   let maxV = 0
  
//   while (l < r) {
//       maxV = Math.max(maxV, (r - l) * Math.min(height[r], height[l]))
//       if (height[l] < height[r]) {
//           l++
//       } else r--
//   }
  
//   return maxV
// };

// const maxArea = function (height) {
// 	let max = 0;
// 	for (let i = 0, j = height.length - 1; i < j; ) {
// 		max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
// 		height[i] < height[j] ? i++ : j--;
// 	}
// 	return max;
// };

console.log(mostWater([1,8,6,2,5,4,8,3,7]));
console.log(mostWater([1,1,1,1,1,1,9,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));
console.log(mostWater([9,1,1,1,1,1,9]));
console.log(mostWater([1,1,9,1,9,1,1]));