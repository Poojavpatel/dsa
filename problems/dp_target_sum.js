// const findTargetSumWays = (nums, target, dp={}) => {
//   const traverse = (index, sum)=>{
//     if(dp.hasOwnProperty(`${index}-${sum}`)) return dp[`${index}-${sum}`];
//     if(index >= nums.length) return sum === target ? 1 : 0;
//     let add = traverse(index + 1, sum + nums[index]);
//     let sub = traverse(index + 1, sum - nums[index]);
//     dp[`${index}-${sum}`] = add + sub;
//     return dp[`${index}-${sum}`];
//   }
//   return traverse(0,0)
// }

const help = (nums=[],sum,target,index) => {
  if(index==nums.length){
    if(sum==target)
        return 1;
    else 
        return 0;
  }
 const positive=help(nums,sum+nums[index],target,index+1);
 const negative=help(nums,sum-nums[index],target,index+1);
 return positive+negative;
}

const findTargetSumWays = (nums, target, dp={}) => {
  return help(nums,0,target,0);
}


// console.log(findTargetSumWays([1,1,1,1,1], 3)); 
// 5 ways
// -1 + 1 + 1 + 1 + 1 = 3
// +1 - 1 + 1 + 1 + 1 = 3
// +1 + 1 - 1 + 1 + 1 = 3
// +1 + 1 + 1 - 1 + 1 = 3
// +1 + 1 + 1 + 1 - 1 = 3

// console.log(findTargetSumWays([1,1,1,1,1], 5)); 
// 1 way +1 +1 +1 +1 +1

// console.log(findTargetSumWays([1,1,1,1,1], -5)); 
// 1 way -1 -1 -1 -1 -1

console.log(findTargetSumWays([2,7,3,4,2,5], 5)); 

// 1. Add all entries and subtract all entries, if(!(subtraction sum < target < addition sum)) return 0 ways
// 2. If target == subtraction sum or target == addition sum, return 1, as only one way it can be achived
// 3. Brute Force will be 2^n 
// 4. Even odd 
// even + even = even 
// even + odd = odd
// odd + even = odd 
// odd + odd = even 
// even - even = even
// even - odd = odd 
// odd - odd = even 
// odd - even = odd 

