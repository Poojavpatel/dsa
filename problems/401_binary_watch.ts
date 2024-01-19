/* 
A binary watch has 4 LEDs on the top to represent the hours (0-11), and 6 LEDs on the bottom to represent the minutes (0-59).   
Each LED represents a zero or one, with the least significant bit on the right.

Incase all led are lit:
8 4 2 1 
32 16 8 4 2 1 

For example, the below binary watch reads "4:51".
_ 4 _ _
32 16 _ _ 2 1

0 <= turnedOn <= 10

Given an integer turnedOn which represents the number of LEDs that are currently on (ignoring the PM), return all possible times the watch could represent. You may return the answer in any order.
The hour must not contain a leading zero.
For example, "01:00" is not valid. It should be "1:00".
The minute must consist of two digits and may contain a leading zero.
For example, "10:2" is not valid. It should be "10:02".

Input: turnedOn = 1
Output: ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]

Input: turnedOn = 9
Output: []
*/

/* 
Solution assuming turnedOn is 2 
Since we needed to keep 2 leds on, we used two loops, time complexity n*n 
Note : its not exactly n*n, since loops run for leds.length ie 10 times max
If we needed to keep 3 on, we would use i j k, 3 loops inside each other, time complexity n*n*n
General complexity would be n*n*n*... 10 times 
*/
function readBinaryWatch2(turnedOn: number): string[] {
  const leds = [8, 4, 2, 1, 32, 16, 8, 4, 2, 1];
  const times: string[] = [];

  for (let i = 0; i < leds.length; i++) {
    for (let j = i + 1; j < leds.length; j++) {
      let hours = 0;
      let minutes = 0;

      i <= 3 ? (hours += leds[i]) : (minutes += leds[i]);
      j <= 3 ? (hours += leds[j]) : (minutes += leds[j]);

      if (!(hours < 12 && minutes < 60)) {
        // skip if time is not valid
        continue;
      }

      const time: string = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
      times.push(time);
    }
  }

  return times;
}

// console.log(readBinaryWatch2(2));
/* 
[
  '10:00', '9:00', '8:32', '8:16', '8:08',
  '8:04',  '8:02', '8:01', '6:00', '5:00',
  '4:32',  '4:16', '4:08', '4:04', '4:02',
  '4:01',  '3:00', '2:32', '2:16', '2:08',
  '2:04',  '2:02', '2:01', '1:32', '1:16',
  '1:08',  '1:04', '1:02', '1:01', '0:48',
  '0:40',  '0:36', '0:34', '0:33', '0:24',
  '0:20',  '0:18', '0:17', '0:12', '0:10',
  '0:09',  '0:06', '0:05', '0:03'
]
*/

/*
In our solution, the number of loops depend on input value
The size of the loop stays the same (all loops run for max 10 times, the size of leds array)
We need to somehow make that number of loops stay same

Since this is a backtracking problem, lets think of how backtracking works
Consider we have a starting point S, and 3 ways to go A B C, from A we can go to A1 A2 A3, and similarly from B C as well
Suppose our goal is at C2, how we would go by backtracking would be 
S-A-A1, S-A-A2, S-A-A3, S-B-B1, S-B-B2, S-B-B3, S-C-C1, S-C-C2-Goal 
This is exactly how DFS traversal would go 
We implement DFS using stack, or recursion (call-stack)

Lets think of implementing this problem using stack
Length of stack = input
We push values to the stack till it is full
1. If stack is full, check the total value in stack, if its a valid time, push to validTimes array
2. if not, push the last element out and push next element in, check if valid time
Repeat steps 1 and 2 till all possibilities are checked

This is very tough to implement, also its similar to running multiple loops inside loops
*/

/* 
Until now, we were thinking of a tree in terms like the nodes can be 8 4 2 1 etc
Instead lets approach this the way we approached backtracking problem to find all permutations and combinations problems/array_target_sum.js

Our root of tree is 00:00
in the first level we consider two nodes, left considers 8 is on, right side 8 is off
on the next level left :4 ON : 4 OFF, these will be under both 8 ON and 8 OFF, total 4 leafs
next level 2 ON and 2 OFF, and so on
At any level, if hours > 11 or minutes > 59, we stop exploring that node any further
We do this using DFS
*/

function getAllPossibleTimes(treeLevel: number): string[] {
  const leds = [8, 4, 2, 1, 32, 16, 8, 4, 2, 1];
  const times: string[] = [];
  let timeString: string = "";
  let index: number = 0;

  /* [currentHour, currentMinute, nextIndex] */
  const stack = [[0, 0, 0]];

  while (stack.length) {
    const [currentHour, currentMinute, index] = stack.pop()!;

    if (currentHour > 11 || currentMinute > 59) {
      continue;
    }

    if (index == treeLevel) {
      timeString = `${currentHour}:${
        currentMinute < 10 ? "0" : ""
      }${currentMinute}`;
      times.push(timeString);
    }

    if (index < leds.length) {
      /* leds[i] turned OFF */
      stack.push([currentHour, currentMinute, index + 1]);

      /* leds[i] turned ON */
      if (index < 4) {
        /* Add to hour */
        stack.push([currentHour + leds[index], currentMinute, index + 1]);
      } else {
        /* Add to minutes */
        stack.push([currentHour, currentMinute + leds[index], index + 1]);
      }
    }
  }

  console.log(times.length);
  return times;
}

// console.log(getAllPossibleTimes(3));

/* 
The above function correctly returns all possible values at a tree level
eg 1 ['8:00' '0:00']
2 [ '8:00', '4:00', '0:00' ] // here 12:00 is discarded as it is not valid time
3 [ '10:00', '8:00', '6:00', '4:00', '2:00', '0:00' ]
9 (max level) array of size 300 // 2 raised to 10 is 1024, but since we reject all non valid times, 360 is correct

These are all possible valid permutations, but we still need a way to compute with turnedOn input

One modification we can do is to keep a track of ledsTurnedOn on a path, if it goes above 3, we stop exploring that sub tree
*/

function readBinaryWatch(turnedOn: number): string[] {
  const leds = [8, 4, 2, 1, 32, 16, 8, 4, 2, 1];
  const times: string[] = [];
  let timeString: string = "";

  /* [currentHour, currentMinute, nextIndex, ledsTurnedOn] */
  const stack = [[0, 0, 0, 0]];

  while (stack.length) {
    const [currentHour, currentMinute, index, ledsTurnedOn] = stack.pop()!;

    if (currentHour > 11 || currentMinute > 59) {
      continue;
    }

    if (ledsTurnedOn > turnedOn) {
      continue;
    }

    if (ledsTurnedOn == turnedOn) {
      timeString = `${currentHour}:${
        currentMinute < 10 ? "0" : ""
      }${currentMinute}`;
      times.push(timeString);

      continue;
    }

    if (index < leds.length) {
      /* leds[i] turned OFF */
      stack.push([currentHour, currentMinute, index + 1, ledsTurnedOn]);

      /* leds[i] turned ON */
      if (index < 4) {
        /* Add to hour */
        stack.push([
          currentHour + leds[index],
          currentMinute,
          index + 1,
          ledsTurnedOn + 1,
        ]);
      } else {
        /* Add to minutes */
        stack.push([
          currentHour,
          currentMinute + leds[index],
          index + 1,
          ledsTurnedOn + 1,
        ]);
      }
    }
  }

  return times;
}

// console.log(readBinaryWatch(2));

/*
This solution worked but with bad runtime 63ms (beats only 37.50%) memory 46.19mb (beats only 15.63%)
To fix space complexity lets use recursion instead of stack
*/

function readBinaryWatchRecursive(turnedOn: number): string[] {
  const leds = [8, 4, 2, 1, 32, 16, 8, 4, 2, 1];
  const times: string[] = [];
  let timeString: string = "";

  function recursive(
    currentHour: number,
    currentMinute: number,
    index: number,
    ledsTurnedOn: number
  ): void {
    if (currentHour > 11 || currentMinute > 59) {
      return;
    }

    if (ledsTurnedOn > turnedOn) {
      return;
    }

    if (ledsTurnedOn == turnedOn) {
      timeString = `${currentHour}:${
        currentMinute < 10 ? "0" : ""
      }${currentMinute}`;
      times.push(timeString);

      return;
    }

    if (index < leds.length) {
      /* leds[i] turned ON */
      if (index < 4) {
        /* Add to hour */
        recursive(
          currentHour + leds[index],
          currentMinute,
          index + 1,
          ledsTurnedOn + 1
        );
      } else {
        /* Add to minutes */
        recursive(
          currentHour,
          currentMinute + leds[index],
          index + 1,
          ledsTurnedOn + 1
        );
      }

      /* leds[i] turned OFF */
      recursive(currentHour, currentMinute, index + 1, ledsTurnedOn);
    }
  }

  /* currentHour, currentMinute, nextIndex, ledsTurnedOn */
  recursive(0, 0, 0, 0);

  return times;
}

console.log(readBinaryWatchRecursive(2));

/*
Using stack improved memory a lot 43.40mb (beats only 65.63%)
but runtime got worse form 63ms to 71ms
To fix time complexity lets use memoization

No memoization worked here, as no exact same path is repeated again
*/
