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

console.log(mostWater([1,8,6,2,5,4,8,3,7]));
console.log(mostWater([1,1,1,1,1,1,9,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));
console.log(mostWater([9,1,1,1,1,1,9]));
console.log(mostWater([1,1,9,1,9,1,1]));