# Data Structures and Algorithm

## Big O Notation
  * Used to compare and rate different working implementations
  * Allows us to talk formally about how runtime of algo grows as input grows
  * upper bound, worst case senario
  * doesnt care about precision just general trend

  1. ### Time Complexity
      ```
      Problem - Add numbers from 0 upto n including n   
          
      Approch 1 - initialize total=0, using a loop and adding each no   
      Time Taken ~ 1.5 sec   
      As n grows, no of operations grow roughly in proportion to n
        
      Approch 2 - sum till n = n * (n-1) / 2   
      Time Taken ~ 0.001 sec   
      3 simple operations regardless to the size of n
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
  ---       
  ## Problem Solving Approch
  ---       
  ## Problem Solving Patterns
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
