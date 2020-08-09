# Data Structures and Algorithm

## Big O Notation
  * Used to compare and rate different working implementations
  * Allows us to talk formally about **how runtime of algo grows as input grows**
  * considers upper bound, worst case senario
  * doesnt care about precision just general trend

  1. ### Time Complexity
      ```
      Problem - Add numbers from 0 upto n including n   
          
      Approch 1 - initialize total=0, using a loop and adding each no   
      Time Taken ~ 1.5 sec   
      As n grows, no of operations grow roughly in proportion to n ---> O(n)
        
      Approch 2 - sum till n = n * (n-1) / 2   
      Time Taken ~ 0.001 sec   
      3 simple operations regardless to the size of n ---> O(1)
      ``` 

      Common Time complexities
      * no loops -> O(1)
      * one loop -> O(n)
      * two loops -> O(2n) -> O(n)
      * two nested loops -> O(n<sup>2</sup>)

      Comparison of common time complexities   
      <img src="./comparision.png" width="30%"/>


      On a grand scale  
      <img src="./bigo_complexity_chart.jpeg" width="40%"/>

      ```
      // Determine the time complexity for the following function 

      function logAtMost10(n) {
          for (var i = 1; i <= Math.min(n, 10); i++) {
              console.log(i);
          }
      }

      // O(1) - no mater what n is it runs 10 times
      ```

  2. ### Space Complexity
      Space required by the algorithm, not including space taken by the inputs   

      Rules of thumb to calculate space complexity
      * Most primitives (nos, chars, booleans, undefined, null) are constant space
      * String require n (length of string) space
      * Arrays, objects require n (length of arrays, keys of object)space 

      ```
      // Determine the space complexity for the following function 

      function onlyElementsAtEvenIndex(array) {
          var newArray = Array(Math.ceil(array.length / 2));
          for (var i = 0; i < array.length; i++) {
              if (i % 2 === 0) {
                  newArray[i / 2] = array[i];
              }
          }
          return newArray;
      }


      // O(n) - if n is 10 space req is 5, n=100 50, n=200 100 ... increases linerly with n
      ```

  3. ### Logarithms
      Logarithm is the inverse of exponentiation

      log<sub>2</sub>(8) = 3      -------->      2<sup>3</sup> = 8

      
      > Binary Logarithm of a number roughly measures the no of times you can divide the no by 2 
      before you get a value less then or equal to 1
      

---       
## Analysing Performance of Arrays and Objects
  * ### Objects
    * unordered, key value pairs
    * Values are reffered by keys, firstName, color, etc
    * Use objects when you dont need order
    * when you need fast access, insertion and removal
    * BigO of objects - Access O(1), Insertion O(1), Removal O(1), Searching O(n)
    * BigO of predefined methods - Object.keys O(n), Object.values O(n), Object.entries O(n), Object.hasOwnProperty O(1)

  * ### Arrays
    * Arrays are ordered
    * Values are reffered by indexes, 0th item, 1st item...
    * Use arrays when you **need order**
    * BigO of Arrays - Access O(1), Searching O(n)
    * Insertion/Removal at end O(1), insertion/removal at begining O(n) as we have to shift all existing values
    * shift() and unshift() is much costlier then push() and pop()

    * BigO of array methods
        * push() pop() - O(1)
        * shift() unshift() - O(n)
        * concat() - O(n+m) -> O(n)
        * slice() splice() - O(n) as rest part needs to be reordered
        * sort() - O(n log n) VERY EXPENSIVE
        * forEach, map, filter, reduce - O(n) process each element once

---       
## Problem Solving Patterns
1. ### Frequency Counter Pattern
    > The Idea behind frequency counter is use an object to construct a profile of an array or a string      

    <u>Example</u>   
    Write a function 'same' which accepts two arrays,    
    The function should return true if every value in the array has its corresponding value squared in second array,    
    The frequency of values must be same   
    same([1, 2, 3], [4, 1, 9]) // true   
    same([3, 4, 2], [4, 16]) // false   
    same([1, 2, 1], [4, 4, 1]) // false   

    ```
    function same(arr1=[], arr2=[]){
      let result = true;
      arr1.forEach(value => {
        const index = arr2.indexOf(value * value);
        if(index < 0){
          result = false;
          return result;
        }
        arr2.splice(index, 1);
      });
      return result;
    }

    // forEach O(n), indexOf O(n), splice O(n) ---> O(n*n)
    ```

    ```
    // frequency counter refactored
    function same(arr1=[], arr2=[]){
      const freq1 = {};
      const freq2 = {};
      arr1.forEach(val => freq1[val] ? (freq1[val] += 1) :  (freq1[val] = 1));
      arr2.forEach(val => freq2[val] ? (freq2[val] += 1) :  (freq2[val] = 1));
      for(let key in freq1){
        if(!freq2[key * key]){
          return false;
        }
        if(freq1[key] !== freq2[key * key]){
          return false;
        }
      }
      return true;
    }

    // forEach O(n), for O(n) ---> O(3n) ----> O(n)
    ```


1. ### Multiple Pointers Pattern
   > Create pointers that correspond to an index or position, and move toward the beginning end or middle based on condition.  mostly used on sorted linear structures   

    <u>Example 1 - One pointer from left and one from right</u>   
    Write a function 'sumZero' which accepts **sorted array** of integers,    
    The function should return first pair where sum is 0,   
    Return an array that includes both nos that sum upto 0 or undefined if pair doesnt exist    
    sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]   
    sumZero([-2, 0, 1, 3]) // undefined      
    sumZero([-4, -3, -2, -1, 0, 1, 2, 5]) // [-2, 2]   
    sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]) // [-3, 3]  

    ```
    // brute force
    function sumZero(arr=[]){
      for(let i=0; i < arr.length; i++){
        for(let j=i+1; j < arr.length; j++){
          if(arr[i] + arr[j] === 0){
            return [arr[i], arr[j]];
          }
        }
      }
    }

    // nested loop ---> O(n*n)
    ```

    ```
    // multiple pointers one from left and one from right
    function sumZero(arr=[]){
      let left = 0;
      let right = arr.length -1;
      while(left < right){
        const sum = arr[left] + arr[right];
        if(sum === 0){
          return [arr[left], arr[right]];
        }
        sum > 0 ? right-- : left++ ;
      }
    }

    // while loop ---> O(n)
    ``` 

    \
    <u>Example 2 - </u>   
    Write a function 'countUniqueValues' which accepts **sorted array** of integers, and counts unique values in the array    
    countUniqueValues([1, 1, 1, 1, 1, 3]) // 2  
    countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7      
    countUniqueValues([]) // 0  
    countUniqueValues([-2, -1, -1, 0, 1]) // 4  

    ```
    // brute force - use set or maybe hash n increase count when new value put into hash
    function countUniqueValues(arr=[]){
      const set = new Set(arr);
      return set.size;
    }
    ```

    ```
    // multiple pointers refactored ---> O(n)
    function countUniqueValues(arr=[]){
      let count = 0;
      let ptr1 = 0;
      let ptr2 = 1;
      while(ptr2 <= arr.length){
        if(arr[ptr1] === arr[ptr2]){
          ptr2++;
        } else {
          count++;
          ptr1 = ptr2;
          ptr2++;
        }
      }
      return count;
    }
    ``` 
1. ### Sliding Window Pattern
    > This pattern is useful when we have an array or string and we are looking for a subset of data that is continuous   
    
    <u>Example</u>   
    write a function maxSubarraySum which accepts an array of integers and a number called n.  
    The function should calculate the maximum sum of n consequitive elements in an array.  
    maxSubarraySum([1,2,5,2,8,1,5], 2) // 10  
    maxSubarraySum([1,2,5,2,8,1,5], 4) // 17  
    maxSubarraySum([4,2,1,6], 1) // 6  
    maxSubarraySum([4,2,1,6,2], 4) //  13  

    ```
    // brute force --> O(n*m)
    function maxSubarraySum(arr=[], num){
      if(num > arr.length) { return null }
      let max = -Infinity;
      for(var i=0; i<= arr.length - num ; i++ ){
        let temp = 0
        for(j=i ; j< i + num ; j++){
          temp += arr[j];
        }
        max = (temp > max) ? temp : max;
      }
      return max;
    }    
    ```

    ```
    // sliding window --> O(m + n)
    function maxSubarraySum(arr=[], num){
      if(num > arr.length) { return null }
      let max = 0;
      let tempSum = 0;
      for(var i=0; i< num ; i++){
        tempSum += arr[i];
      }
      max = (tempSum > max) ? tempSum : max;
      for(var j=num ; j<arr.length ; j++){
        tempSum = tempSum + arr[j] - arr[j-num];
        max = (tempSum > max) ? tempSum : max;
      }
      return max;
    }
    ```
1. ### Divide and Conquer Pattern
    > This pattern involves dividing a dataset into smaller chunks and then repeating a process with a subset of data   

   * Quick sort and Merge sort are examples of divide and conquer 
   * Binary serch is also an example of divide and conquer 

   Example   
   Given a **sorted array** and a value, write a function search which returns index of value in that array  
   return -1 if value not found   
   search([1, 4, 6, 9, 44, 60], 9) // 3

    ```
    // Linear Search - O(n)
    function search(arr, val){
      for(let i=0; i< arr.length; i++){
        if(arr[i] === val){ return i }
      }
      return -1;
    }
    ```

    ```
    // Binary Search - O(log n)
    ```

* ### Tips
  * To avoid encountering duplicates again, splice them off
  * To remove duplicates, make a set

---
## Tips and Tricks
  ```
  // Traverse deeply nested object using recursion

  function nestedLoop(obj) {
    const res = {};
    function recurse(obj, current) {
      for (const key in obj) {
        let value = obj[key];
        if(value != undefined) {
          if (value && typeof value === 'object') {
            recurse(value, key);
          } else {
            // Do your stuff here to var value
            res[key] = value;
          }
        }
      }
    }
    recurse(obj);
    return res;
  }
  ```

  ```
  // Traverse deeply nested object and append keys
  
  function getArray(obj) {
    const result = [];
    function traverseObject(obj, current, appendedKeys='') {
      for (const key in obj) {
        let value = obj[key];
        if(value != undefined) {
          if (value && typeof value === 'object') {
            if(key === 'amount'){
              const data = {};
              data[appendedKeys] = value.value;
              result.push(data);
            } else {
              traverseObject(value, key, appendedKeys.concat(key));
            }
          }
        }
      }
    }
    traverseObject(obj);
    return result;
  }
  ```

  ```
  // Accept n no of arguments in javascript - use arguments keyword or spread operator

  function multipleArguments(...arr){ 
    return arr.sort();
  }

  ```

---       
## Recursion
  A function that calls itself, until it reaches a base case
  
  Recursion is used by
  * JSON parse / JSON stringify
  * document.getElementById and DOM traversal algorithms
  * tree / graph traversals

  ### The call stack
  * A built in data structure that manages what happens when functions are invoked
  * uses the stack data structure
  * when a function is invoked it is pushed on top of stack, when return is seen or function ends it is poped
  * observe the call stack in dev tools by adding breakpoints to the snippet

  Example - Factorial
  ```
  // Iterative way

  function factorial(num){
    let total = 1;
    for(var i=num ; i > 1 ; i--){
      total = total * i;
    }
    return total;
  }
  ```

  ```
  // Recursion

  function factorial(num){
    if (num === 1) return 1;
    return num * factorial(num - 1);
  }
  ```

### Helper Method Recursion
* A **design pattern** to use recursion for arrays and strings 
* We have an outer function and inside the outer function we have an recursive helper function which calls itself
* The reason we do this is say we deifine result = [ ], whenever the recursive function calls itself the **Result will reset**

Example - Find all odds in a array using Helper Method Recursion
```
function collectOddValues(arr){
  let result = [];
  function helper(input){
    if (input.length === 0) return;  // base condition
    if (input[0] % 2 !== 0) result.push(input[0])
    helper(input.slice(1));
  }

  helper(arr);
  return result;
}
```

---       
## Searching Algorithms (Linear, Binary, Naive)
1. ### Linear Search
   * Checking each item one at a time
   * Time complexity is O(n)

2. ### Binary Search
   * Divide the structure into two halves using a pivot point (middle value), search on the left or right
   * Repeatedly dividing the search interval in half
   * Only works on **sorted** structures
   * Time complexity is O(log n)

3. ### Search for substring in a string
   Example - search for omg in wowomgzomg  
   Brute force - loop over the longer string,nested loop over shorter string, if characters dont match break out of inner loop, if you complete inner loop increment count --> O(n * m) -> O(n * n)


---       
## Sorting 
  Sorting is the process of rearranging items in collection, so that items are in some kind of order  
  [View sorting algorithm animation]: <https://www.toptal.com/developers/sorting-algorithms>   
  [View Individual algo step by step]: <https://visualgo.net/en/sorting>

  * Javascript default sort [6, 4, 15, 10].sort() returns [10, 15, 4, 6]
  * Javascript default sort is according to string Unicode code points
  * We can pass in a comparator function to tell javascript how to sort

---
## Bubble Sort   
  > An Algorithm where the largest value bubble up to the top, one at a time
  * In one pass, compare two values, if larger no is before smaller then **swap**,else continue
  * After one pass the largest value reaches the top, ie the end of array
  * Repeat for i-1
  * optimization for an nearly sorted array, count if any swaps were made in last pass, if no swaps were made the array is already sorted
  * BigO of bubble sort O(n * n)
  * BigO for nearly sorted data O(n)

---
## Selection Sort
  > Simillar to bubble sort,but places small values into sorted position
  * In one pass, **find the smallest value** in the array and place it/swap it with the first (i th) value
  * After one pass the smallest value reaches the start of the array
  * Repeat from i + 1
  * **No of swaps made is much lower the bubble sort**
  * **Works poorly for nearly sorted data as compared to bubble sort, as still have to loop the entire array to find the min value**
  * BigO of selection sort O(n * n)

---
## Insertion Sort
  >Instead of finding largest or smallest, it takes one element at a time and places it where it should go in the sorted portion

  * BigO of insertion sort O(n * n)
  * Works for **continuously changing data**, if new values are added to the end of the array

---
## Merge Sort
  > Split, sort, merge

  * Bubble sort, Selection sort, Insertion sort dont scale well for longer arrays
  * Bubble sort roughly takes 20 sec for 10000 elements while merge sort takes 1 sec
  * Time complexity of Merge sort O(n log n)  and space complexity is O(n)
  * Merge sort uses the fact that an array with 0 or 1 element is already sorted
  * Works by decomposing the array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
  * How BigO of merge sort is O(n log n) ?   
    As no of elements(n) grows the no of times we split grows by log n.   
    8 elements array take 3 steps, 32 elements array takes 5 steps   
    Each time we decompose it, during merging we have O(n) comparisions.   
    Hence O(log n) decompositions * O(n) comparision per decomposition
  
  ```
  // Merge sort implementation

  function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }
  ```
   
  ```
  // Merging two sorted arrays - merge([1, 10, 50], [2, 14, 99, 100]) merge([1, 2, 50], [3, 7, 99, 100])
  function merge(a=[], b=[]) {
    const sorted = [];
    let i = 0;
    let j = 0;
    while(a[i] && b[j]){
      if(a[i] <= b[j]){
        sorted.push(a[i]);
        i++;
      } else {
        sorted.push(b[j]);
        j++;
      }
    }
    while(a[i]){
      sorted.push(a[i]);
      i++;
    }
    while(b[j]){
      sorted.push(b[j]);
      j++;
    }
    return sorted;
  }
  ```

---
## Quick Sort
  > 

  * Like Merge sort it uses the fact that an array with 0 or 1 element is already sorted
  * Works by selecting one element called **pivot** and finding the index where pivot should be in sorted array
  * After finding a pivot, move all the numbers less then that no to the left and all the no greater to the right (order doesnt matter)
  * After one pass, we know that that **pivot** is in the right spot
  * Repeat the process for left side and then right side
  * **Runtime of quick sort changes on how one selects a pivot**
  * Ideally pivot should be the median value of the data
  * Since sorting is happening in place, base condition of recursion is not that array has 0 or 1 element, rather subarray has 0 or 1 elements
  * Time complexity of Quick sort is O(n log n) for best and avg case, O(n * n) for worst case
  * In worst case is an already sorted array, hence instead of picking first item as a pivot, pick middle or a random element
  * Space complexity is O(n log n)

  ```
  // Pivot helper function
  This function should designate an element as pivot and rearrange elements such that values less then pivot are to the left and greater to the right
  The order of values on either side doesnt matter
  Should do this in place, DO NOT create new array
  when done return the index of the pivot

  function pivot(arr = [], start=0, end= arr.length-1){
    let pivot = arr[start];
    let smallerCount = 0;
    let swapTo = start + 1;
    for(let i = start; i<=end; i++){
      if(arr[i] < pivot){
        smallerCount++;
        [arr[swapTo], arr[i]] = [arr[i], arr[swapTo]];
        swapTo++;
      }
    }
    [arr[smallerCount], arr[start]] = [arr[start], arr[smallerCount]];
    console.log('-arr-', arr);
    return smallerCount;
  }
  ```

  ```
  // Quick sort implementation

  function quickSort(arr, left=0, right=arr.length-1) {
    if(left<right){
      let pivotIndex = pivot(arr, left, right);
      quickSort(arr, left, pivotIndex-1);
      quickSort(arr, pivotIndex+1, right);
    }
    return arr;
  }
  ```

---
## Comparision of sorting algorithms
* Bubble sort, Selection sort, Insertion sort work well with shorter arrays and have nearly the same complexities O(n * n)
* Bubble sort and Insertion sort works well with nearly sorted data , O(n)
* Selection sort takes too long to sort nearly sorted data, O(n*n), as still have to loop all the way to find the min value
* Insertion sort can handle new values being pushed at the end of the array
* Merge sort has time complexity O(n log n) and space complexity is O(n)
* Time complexity of Quick sort is O(n log n) for best and avg case, O(n * n) for worst case and 
* Space complexity of Quick sort is O(n log n)
---       
## Data Structures (Classes and Instances)
---       
## Recursion
---       
## Singly Linked Lists 
---       
## Doubly Linked Lists 
---       
## Stack and Queues
---       
## Binary Search Tree
---       
## Tree Traversal
---       
## Binary Heaps
---       
## Hash Table
---       
## Graphs
---       
## Graph Traversal
---       
## Dijkstras Algorithm
---       
## Dynamic Programming
---       
## Wild West
