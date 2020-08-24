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

      ```javascript
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

      ```javascript
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

    ```javascript
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

    ```javascript
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
    \
    <u>Example 2 - </u>   
    Given two strings, determine if second string is the anagram of first   
    An anagram is a word formed by rearranging letters of another such as cinema from iceman      
    validAnagram('', '') // true   
    validAnagram('cinema', 'iceman') // true   
    validAnagram('anagram', 'nagaram') // true   
    validAnagram('aaz', 'zza') // false    
    validAnagram('rat', 'car') // false    
    validAnagram('awesome', 'awesom') // false    

    ```javascript
    function validAnagram(str1='', str2=''){
      if(str1.length !== str2.length) return false;
      const hash = {};
      for(var i in str1) { hash[str1[i]] ? hash[str1[i]] += 1 : hash[str1[i]] = 1 };
      for( var i in str2){
        if(!hash[str2[i]]){
          return false;
        }
        hash[str2[i]] -= 1;
      }
      return true;
    }
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

    ```javascript
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

    ```javascript
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

    ```javascript
    // brute force - use set or maybe hash n increase count when new value put into hash
    function countUniqueValues(arr=[]){
      const set = new Set(arr);
      return set.size;
    }
    ```

    ```javascript
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

    ```javascript
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

    ```javascript
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

    ```javascript
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
  ```javascript
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

  ```javascript
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

  ```javascript
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

  Example 1 - Factorial
  ```javascript
  // Iterative way

  function factorial(num){
    let total = 1;
    for(var i=num ; i > 1 ; i--){
      total = total * i;
    }
    return total;
  }
  ```

  ```javascript
  // Recursion

  function factorial(num){
    if (num === 1) return 1;
    return num * factorial(num - 1);
  }
  ```

  Example 2 - Fibonaci   
  using recursion write a function that returns nth no in fibonaci series. Fibonaci seq - 1, 1, 2, 3, 5, 8, 13   
  fib(4) // 3   
  fib(5) // 5   
  fib(10) // 55   

  ```javascript
  function fib(n){
    if(n <= 2) return 1;
    return fib(n-1) + fib(n - 2);
  }
  ```

### Helper Method Recursion
* A **design pattern** to use recursion for arrays and strings 
* We have an outer function and inside the outer function we have an recursive helper function which calls itself
* The reason we do this is say we deifine result = [ ], whenever the recursive function calls itself the **Result will reset**

Example - Find all odds in a array using Helper Method Recursion
```javascript
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
  
  ```javascript
  // Merge sort implementation

  function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }
  ```
   
  ```javascript
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

  ```javascript
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

  ```javascript
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
## Heap Sort

---
## Radix Sort

  > Instead of making comparisions, it uses no of digits and places them into buckets   

  * All the above sorting algorithms are comparision sorts, at the base we compare two elements at once
  * The best comparision sorts can do is O(n log n), which is in accordance to mathematical bounds
  * There are other type of sorting algorithms that do not use comparision, they take advantage of special properties of data, One of them is **Radix Sort**
  * For eg - there is a group of sort called integer sorting algorithms
  * **Radix sort is a special sorting algorithm that does not use comparisions and works on lists of numbers**
  * It uses the fact that information about the size of a number is encoded in the number of digits (More digits means a bigger no !!)
  * Time complexity is O(nk) where k is word size of nos
  * Space complexity is O(n + k)

  ### Radix sort Working
  * Form 10 buckets labelled from 0 to 9, incase the base is 10
  * If base of nos is 2, buckets will be 0 and 1
  * check the units place of all the numbers in the array, and place them accordingly into the buckets
  * ex - 45677 will go into 7, 40 will go into 0, 7 will go into 7, etc
  * now maintain the order in which they were in the buckets
  * now place them again in buckets , by checking tens place
  * ex- 45677 will go in 7, 40 will go in 4 , 567 will go in 6
  * repeat till the the first digit of the longest no is compared

  ```
  // Radix sort Implementation
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
* There are other type of sorting algorithms that do not use comparision, they take advantage of special properties of data, One of them is Radix Sort
* Time complexity of radix sort is O(nk) where k is word size of nos and Space complexity is O(n + k)

---       
## Data Structures (Classes and Instances)

Data structures are collections of values, the relationship among then, and the functions or operations that can be applied to the data

### Class
* A blueprint for creating objects with predefined properties and methods, like making a mould
* class names conventionally start with capital letters
* Constructor is a special function that runs when the class is instantiated
* The class keyword creates a constant so you cannot redefine it
* class instances are created using the **new** keyword
```javascript
class Student() {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let pooja = new Student('Pooja', 'patel');
console.log(pooja.firstName);
```

### Instance Methods
* Methods that work on individual instance level, and not class level

```javascript
class Student() {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
}

let pooja = new Student('Pooja', 'patel');
pooja.fullName()
```

### Class Methods
* Methods that is relevent to class, but not necessarily to individual instances
* we use **static** keyword in front of method defination
* static methods are called without instantiating thier class and **cannot** be called through a class instance
* static methods are often used to create utility functions for an application

```javascript
class Student() {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  static enrollStudents(...students) {
    // send email to students
  }
}

let pooja = new Student('Pooja', 'patel');
Student.enrollStudents([pooja]);
```

* Use case of a class method
```javascript
class Point{
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static calculateDistance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx,dy);
  }
}

const p1 = new Point(5,5);
const p2 = new Point(10,10);

Point.calculateDistance(p1, p2);
```

* here each point represents a point in x,y cordinate system
* To calculate distance between two points, it does not make much sense to call distance on a single point
* Can be implemented like p1.calculateDistance(p2) but since it is more of a utility function, we make it a class method

---       
## Singly Linked Lists 

> Linked Lists consists of nodes, each node has a **value** and a **pointer** to the next node   

> Arrays are like elevators we can go from 6th floor to the 99th, Linked Lists are like stairs we need to go through 1, 2 to reach 3

* In array each item is mapped to its index with a no, i can get the 5th item of an array
* Linked list consist of elements with no indexes, just pointing to another element, like a train
* Each element is called a node, a node has a **value** and a **pointer** to the next node or **null**
* we keep track of three properties - head, tail , length

### Pros and Cons
* Inserting and deleting to the start of array invloves shifting every element, in linked list its just to add an element and point to previos head
* Random access is not possible in linked lists

```javascript
// creating a Node class
class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(5);
a.next = new Node(10);
a.next.next = new Node(15);

// console.log(a) is
Node {
  val: 5,
  next: Node { val: 10, next: Node { val: 15, next: null } }
}
```

```javascript
// create a class for singlyLinkedList and add push method to it

class SinglyLinkedList{
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // if no node add node and set is as head, tail and length ++
    // if nodes present, add new node, set next of previous node as this node, set this node as tail, length ++
    if(this.length) {
      const node = new Node(val);
      this.tail.next = node;
      this.tail = node;
    } else {
      const node = new Node(val);
      this.head = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }
}

const a = new SinglyLinkedList();
a.push(5);
a.push(10);
console.log(a);
```

```javascript
traverse() {
  let node = this.head;
  while(node){
    console.log(node.val);
    node = node.next;
  }
}
```

```javascript
pop() {
  // find out the secondLastNode, set its next to null, set it as tail return last node, length --
  if(!this.head) return undefined;  
  let node = this.head;
  let secondLastNode = null;
  while(node.next){
    secondLastNode = node;
    node = node.next;
  }
  secondLastNode.next = null;
  this.tail = secondLastNode;
  this.length -= 1;
  return node;
}
```

```javascript
shift() {
    // set head as head.next, length--
    if(!this.head) return undefined;
    const currentHead = this.head;
    this.head = this.head.next;
    this.length -= 1;
    if(this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
```

```javascript
unshift(val) {
  // set next of this node as existing head, set this node as head, length++
  const newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.length += 1;
  if(this.length === 1) {
    this.tail = newNode;
  }
  return newNode;
}
```
```javascript
search(val) {
  if(val < 0) return null;
  let counter = 0;
  let node = this.head;
  while(node && node.val !== val){
    counter ++;
    node = node.next;
  }
  if(node === null) {
    return null;
  }
  return counter;
}
  
```
```javascript
get(index) {
  if(index < 0) return null;
  let counter = 0;
  let node = this.head;
  while(node && counter !== index){
    node = node.next;
    counter++;
  }
  return node;
}
```
```javascript
set(index, value) {
  let node = this.get(index);
  if(!node) return null;
  node.val = value;
  return node;
}
  
```
```javascript
insert(index, value) {
  if(index < 0) return null;
  if(index === 0) return this.unshift(value);
  const node = this.get(index-1);
  const newNode = new Node(value);
  newNode.next = node.next;
  node.next = newNode;
  this.length++;
  return this;
}
  
  
```
```javascript
remove(index){
  if(index < 0) return null;
  if(index === 0) return this.shift();
  const node = this.get(index);
  const prevNode = this.get(index - 1);
  prevNode.next = node.next;
  this.length--;
  return node;
}
```
```javascript
// reverse linked list in place
reverse(){
  let node = this.head;
  this.head = this.tail;
  this.tail = node;
  let next = null;
  let prev = null;
  for(var i =0; i<this.length ; i++){
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return this;
}
```

### BigO of Singly Linked Lists
* Insertion at start or end is O(1), for array its O(n) for start and O(1) for end
* Removal from start is O(1) from end O(n), in array removal from start is O(n) and from end is O(1)
* searching is O(n), for array too its O(n)
* Accessing is O(n), for arrays it is O(1)

---       
## Doubly Linked Lists 
---       
## Stack and Queues

> Stack is an abstract data structure, that uses LIFO principle, last item in comes out first.
> Real world examples would be call stack of the browser, stack of books, or plates, etc.   

> Queue is an abstract data structure, that uses FIFO principle, first item in comes out first.
> Real world examples would be queues at ticket counter, etc.   

* Stacks are used in browsers **call stack**, and **managing function invocation**
* Stacks are also used in **Undo/Redo**
* **Routing and managing history** in browsers use stacks
* Queues are used in games, where the one waiting from longest is added first
* Queues are used in **background downloading or uploading**
* Queues are used by **printer** to decide which doc to print first

### BigO of Stacks and Queues
* Insertion in stack is O(1), for queue using linkedLists is O(1) but using array is O(n)
* Removal in stack is O(1), for queue using linkedLists is O(1) but using array is O(n)
* Searching in stack and queue is O(n)
* Access in stack and queue is O(n)


---       
## Binary Search Tree

### Trees
> Trees are non linear data structures, which has nodes in a parent-child relationship   

* Nodes in trees can point to **multiple nodes**, unlike linked lists or doubly linked lists
* Lists are linear, every thing is in a row
* Trees are non linear, **they can branch**
* **we have more then one pathway to a tree**
* Singly linked list can be considered as a very special case of a tree where every parent has exactly one child

### Tree Terminology
* Root - starting topmost node of a tree
* Parent - Any node that has child nodes 
* Child - Any node that a parent points to
* Leaf - A child node that doesnt point to any other nodes
* Edge - connects two nodes

### Rules for a valid tree
* A tree should have **only one root** node
* **Siblings cannot point to each other** in a tree
* **Child cannot point to parent or parents siblings**

### Real World use cases
* **HTML DOM structure** is a tree structure
* **Network routing distributions like Broadcast, multicast, geocast**
* **Linting softwares** use trees
* **AI applications - like miniMax tree** used by tic-tac-toe
* Folders in operating systems
* **JSON** has tree structure

### Binary Search Trees
* **Binary Trees** are special types of trees, in which each node can have **atmost 2 childrens**
* **Binary Search Trees** are special type of Binary trees, **they excel at searching** 
* **Binary Search Trees** are used to store data **that can be compared** ie sortable
* If we take any node, every no less then that are located to the left side, every no greater then that are located to the right
* Every node to the **left** of parent is **always less then** the parent
* Every node to the **right** of parent is **always greater then** the parent

```javascript
class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }
}

/*
BinarySearchTree {
  root: Node {
    value: 10,
    left: Node { value: 7, left: [Node], right: null },
    right: Node { value: 15, left: null, right: [Node] }
  }
}
*/
```

```javascript
// if no root assign value as root
// decide left or right
// if no left or right, assign it as left or right node
insert(value){
  if(!this.root){
    this.root = new Node(value);
    return this;
  }
  let node = this.root;
  while(node){
    if(value === node.value) return undefined;
    if(value<node.value){
      if(!node.left){
        node.left = new Node(value);
        return this;
      }
      node = node.left;
    }
    else {
      if(!node.right){
        node.right = new Node(value);
        return this;
      }
      node = node.right;
    }
  }
}
```
```javascript
find(value){
  if(!this.root) return null;
  let node = this.root;
  while(node){
    if(value === node.value) return true;
    if(value < node.value){
      node = node.left;
    } else {
      node = node.right;
    }
  }
  return false;
}
```


### BigO of Binary Search Trees
* Insertion and searching is O(log n) though there are some exceptions
* Eg 3 -> 17 -> 19 -> 32 -> 63 -> 91

---       
## Tree Traversal

> Tree Traversal - Given any generic tree, how do we visit every node atleast one time

### Two Ways of Tree Traversal
1. Breadth First Search (BFS)
2. Depth First Search (DFS)
    1. PreOrder DFS
    2. InOrder DFS
    3. PostOrder DFS

<img alt="BFS vs DFS" src="https://miro.medium.com/max/1280/0*miG6xdyYzdvrB67S.gif" width="40%"/>
   
<br/>
<br/>
<br/>

### Breadth First Search (BFS)
* We use queue to manage nodes to be visited
* Whenever a node is visited we push its left and right to the queue, they are checked according to FIFO

```javascript
// place root node in queue
// while anything in queue
// take first element out and put in visited
// check if it has left add that in queue, check if right put it in queue
breadthFirstSearch(){
  let queue = [];
  let visited = [];
  queue.push(this.root);
  while(queue.length){
    const node = queue.shift();
    visited.push(node.value);
    if(node.left){
      queue.push(node.left);
    }
    if(node.right){
      queue.push(node.right);
    }
  }
  return visited;
}
```
<br/>

### Depth First Search (DFS)
* PreOrder - Root Left Right
* InOrder - Left Root Right
* PostOrder - Left Right Root   
   
<img alt="orders of DFS" src="https://www.bogotobogo.com/cplusplus/images/binarytree/pre_post_in_order.png" width="30%"/>
  
Comparision of BFS, PreOrder DFS, InOrder DFS, PostOrder DFS   
<img alt="orders of DFS" src="https://leetcode.com/articles/Figures/145_transverse.png" width="43%"/>


### When to use BFS and DFS
<img alt="All Tree Traversal" src="https://i0.wp.com/algorithms.tutorialhorizon.com/files/2015/11/Tree-Traversals.png" width="27%"/>

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
