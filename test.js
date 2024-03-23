/* 
You are given an array containing only 0s and 1s in random order. Your task is to sort the array in a way that all the 0s are on the left side, and all the 1s are on the right side. The catch is that you must traverse the array only once.
Input: [0,1,1,1,1,0,0]

Output: [0,0,0,1,1,1,1]

Please write code to achieve this sorting of the array.
*/

function sortArray(nums = []) {
  let zeroCount = 0;
  const sortedArray = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      zeroCount++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (zeroCount > 0) {
      sortedArray.push(0);
      zeroCount--;
    } else {
      sortedArray.push(1);
    }
  }

  return sortedArray;
}

// console.log(sortArray([0, 1, 1, 1, 1, 0, 0]));

/* 
Write a program to remove duplicates from a sorted array in place. For a given an input array, your task is to modify the array in such a way that it contains only the unique elements, and the result remains sorted.

Input: [1, 1, 1, 2, 3, 3, 6, 6, 7]

Output: [1, 2, 3, 6, 7]
*/

function removeDuplicates(nums = []) {
  let i = 0;
  let j = i + 1;

  while (i < nums.length) {
    if (nums[i] == nums[j]) {
      j++;
    }
    if (j - i > 0) {
      nums.splice(i + 1, j - i);
      i++;
      j = i + 1;
    }
  }

  return nums;
}

function removeDuplicates(nums = []) {
  let i = 0;
  let j = i + 1;

  while (i < nums.length) {
    if (nums[i] === nums[j]) {
      j++;
    } else if (j - i > 1) {
      nums.splice(i + 1, j - i - 1);
      i++;
      j = i + 1;
    } else {
      i++;
      j++;
    }
  }

  return nums;
}

// console.log(removeDuplicates([1, 1, 1, 2, 3, 3, 6, 6, 7]));

function removeDuplicates2(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let uniqueIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[uniqueIndex]) {
      uniqueIndex++;
      arr[uniqueIndex] = arr[i];
    }
    console.log(arr);
  }

  arr.length = uniqueIndex + 1;

  return arr;
}

console.log(removeDuplicates2([1, 1, 1, 2, 3, 3, 6, 6, 7]));

function removeDuplicates3(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1);
      i--; // Adjust the index to recheck the current position
    }
  }
}
