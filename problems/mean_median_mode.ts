/*
Zype Technical interview round 1 question
Problem Statement: Implement a streaming data monitoring class
Design a class that monitors streams of data(of type integers).
At any given instant, the class should be able to calculate the mean, median, and mode of the stream of data.
Implement the `StreamMonitor` class according to the above specifications, ensuring efficient and fast computation of mean, median, and mode for large streams of data.

Class Design:
Define a class `StreamMonitor` with the following features:
1. `constructor/initializer` : Initializes the StreamMonitor object.
2. `insert`: Inserts a new integer `num` into the stream.
3. `calculateMean`: Calculates and returns the mean of the stream of data.
4. `calculateMedian`: Calculates and returns the median of the stream of data. 
5. `calculateMode`: Calculates and returns the mode of the stream of data. If there are multiple modes, return any one of them.

Mean Calculation:
The mean (average) of a set of numbers is calculated by summing all the numbers and dividing by the count of numbers.

Median Calculation:
The median of a set of numbers is the middle value when the numbers are arranged in ascending order. If there is an even number of elements, the median is the average of the two middle elements.

Mode Calculation:
The mode of a set of numbers is the value that appears most frequently in the set.
In the case of multiple modes, any one of them can be returned.
*/

/* 
My Implementation:
We maintain a nums array, in which integers are added and stored in sorted order
We also have variables for totalSum and streamLength, and maintain a frequency hash
When a value is added to the steam, we update the length and the totalSum, add it to the hash, and push it to nums in sorted position
To get mean, we just divide totalSum by streamLength and return
To get median, since nums is already sorted we return middle element or average of middle elements
To get mode, we loop over the frequency array, find the one with most frequency and return it

Optimisations that I had mentioned during the interview:
Use Linked list instead of array, so inserts become faster
Use heap instead of frequency hash, so getting most frequent integer becomes easier
Use binary search to determine where to insert new value in sorted array, instead of using native sort
*/

/* 
Follow up question: 
Lets say we want to fix the size of the stream, eg lets say our stream can at max have 10 integers, what modifications are required
Answer: 
While inserting an integer, if length exceeds max length, move the linked list head ahead by one
Reduce the frequency of the removed node by 1 
Rest everyhting stays the same
*/

class StreamMonitor {
  private nums: number [] = []; /* ascending order */
	private totalSum : number = 0;
	private streamLength : number = 0;
	private frequency : Map<number, number> = new Map<number, number>();
  private lengthMax = 5;

	get sum(): number {
    return this.totalSum;
  }

	get length(): number {
    return this.streamLength;
  }

	private insertInSortedArray(n: number): void {
    this.nums.push(n);
		this.nums = this.nums.sort((a, b) => a - b);  // use binary search to find index of where to insert a new value in a sorted array

		// if length exceeds, move head ahead by one position
		if(this.length >= this.lengthMax){
      const head = this.nums.head;
      this.frequency[head] -= 1;
      
      if(this.frequency[head] == 0){
        // remove from hash
      }

      this.nums.head = this.nums.head.next;
    }
  }
 
	public insert(n : number) : void {
    // validate 
    // update the sum and length
    this.totalSum += n;
    this.streamLength ++;
    
    // update the frequency hash
    if(this.frequency[n]){
      this.frequency[n] += 1;
    } else {
      this.frequency[n] = 1;
    }
    
    // insert in sorted position
		this.insertInSortedArray(n);  // think about using linked list instead of array to reduce insert time complexity
  }
	
	public calculateMean(): number {
    return this.sum/this.length;
  }

	public calculateMedian(): number {
    if(this.length < 1){
      return 0;
    }
    
    if(this.length % 2 == 0){
      // even, take average
      const mid = Math.floor(this.length/2);
      return (this.nums[mid - 1] + this.nums[mid])/2;
    } else {
      // odd, return mid value
      const mid = Math.floor(this.length/2);
      return this.nums[mid + 1];
    }
  }


  /* To optimise mode calculation - use a heap instead of frequency hash to get the most frequent number first */
	public calculateMode(): number {
    let max = 0;
    let mostFrequentInteger;
    for(let number in this.frequency){
      if(this.frequency[number] > max){
        max = this.frequency[number];
        mostFrequentInteger = number;
      }
    }
    return mostFrequentInteger;
  }
}

