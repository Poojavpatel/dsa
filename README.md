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

      ```
      Binary Logarithm of a number roughly measures the no of times you can divide the no by 2 
      before you get a value less then or equal to 1
      ```

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
    ```The Idea behind frequency counter is use an object to create a profile of an array```   
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


1. ### 

---       
## Recursion
---       
## Searching Algorithms (Linear, Binary, Naive)
---       
## Sorting Algorithms (Bubble, Selection, Insertion, Merge, Quick, Radix)
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
