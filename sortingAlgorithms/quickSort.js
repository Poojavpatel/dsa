function pivot(arr = [], start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let smallerCount = 0;
  let swapTo = start + 1;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      smallerCount++;
      [arr[swapTo], arr[i]] = [arr[i], arr[swapTo]];
      swapTo++;
    }
  }
  [arr[smallerCount], arr[start]] = [arr[start], arr[smallerCount]];
  return smallerCount;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));

/* 
[4, 8, 2, 1, 5, 7, 6, 3] index 0 to 7, 4 selected as pivot, store index 1
[4, 2, 8, 1, 5, 7, 6, 3] since 2 is less than 4, it got swapped with 8
[4, 2, 1, 8, 5, 7, 6, 3] since 1 is less than 4, it got swapped with 8
[4, 2, 1, 3, 5, 7, 6, 8] since 3 is less than 4, it got swapped with 8
[3, 2, 1, 4, 5, 7, 6, 8] since 3 was the last on left side, 3 and 4 got swapped, 4 is now on its sorted position after first iteration, all less then 4 on left and all greater than 4 on right

[3, 2, 1] working on left partition [3, 2, 1] now, index 0 to 2, selecting 3 as pivot
[3, 2, 1] no values less than 3, so stays the same
[1, 2, 3] since 1 was the last value, 1 and 3 got swapped, 3 is now on its sorted position
[1, 2, 3, 4, 5, 7, 6, 8] rest values are same, had not mentioned them to avoid confusion

[1, 2] working on left partition [1, 2] now, index 0 to 1, selecting 1 as pivot
[1, 2] 1 is now on its sorted position
[1, 2, 3, 4, 5, 7, 6, 8] rest values are same, had not mentioned them to avoid confusion

[5, 7, 6, 8] working on right partition [5, 7, 6, 8] now, selecting 5 as pivot
[5, 7, 6, 8] 5 is now on its sorted position

[7, 6, 8] working on right partition [7, 6, 8] now, selecting 7 as pivot
[6, 7, 8] 7 is now on its sorted position

[6] working on left partition [6] now, its already sorted

[8] working on right partition [8] now, its already sorted

[1, 2, 3, 4, 5, 6, 7, 8] list is now sorted
*/

/* 
Shorter explanation : 
[4, 8, 2, 1, 5, 7, 6, 3]
4 is selected as first pivot, array gets divided as left partition [3, 2, 1] and right partition [5, 7, 6, 8]
we work on left partition [3, 2, 1] first, 3 is selected as pivot, array gets divided as left partition [1, 2]
we work on left partition [1, 2], 1 is selected as pivot, left side sorting done [1, 2, 3]
we work on right partition [5, 7, 6, 8] now, 5 is selected as pivot, array gets divided as right partition [7, 6, 8]
we work on right partition [7, 6, 8] now, 7 is selected as pivot, array gets divided as left partition [6] and right partition [8]
we work on left partition [6] first
we work on right partition [8] now
list is sorted [1, 2, 3, 4, 5, 6, 7, 8]

This is a DFS approach, we use stack for DFS, in this case we use recursion, which uses the call stack
*/
