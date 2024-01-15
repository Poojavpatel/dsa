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

console.log(readBinaryWatch2(2));
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
