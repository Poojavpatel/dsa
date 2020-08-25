class MaxBinaryHeap{
  constructor(){
    this.values = [];
  }

  insert(value){
    this.values.push(value);
    this.bubbleUp();
  }
  bubbleUp(){
    let index = this.values.length -1;
    let value = this.values[index];
    while(index > 0){
      let parentIndex = Math.floor((index-1)/2);
      let parent = this.values[parentIndex];
      if(value <= parent) break;
      this.values[parentIndex] = value;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  extractMax(){
    const max = this.values[0];
    const mostRecent = this.values.pop();
    if(this.values.length) {
      this.values[0] = mostRecent;
      this.bubbleDown();
    }
    return max;
  }
  bubbleDown(){
    let n = 0;
    const element = this.values[0];
    while(true){
      let leftIndex = (2*n)+1;
      let rightIndex = (2*n)+2;
      let swap = false;
      let maxIndex = this.values[leftIndex] > this.values[rightIndex] ? leftIndex : rightIndex;
      if(this.values[n] < this.values[maxIndex]){
        swap = true;
        this.values[n] = this.values[maxIndex];
        this.values[maxIndex] = element;
        n = maxIndex;
      }
      if(!swap) break;
    }
  }
}

const heap = new MaxBinaryHeap();
// heap.insert(41);
// heap.insert(27);
// heap.insert(54);
// heap.insert(100);
// heap.insert(10);
// heap.insert(40);
// console.log(heap.values); // [ 100, 54, 41, 27, 10, 40 ]
// console.log(heap.extractMax()); // 100
// console.log(heap.values); // [ 54, 40, 41, 27, 10 ]
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.values); // [55, 39, 41, 18, 27, 12, 33]
console.log(heap.extractMax()); // 55
console.log(heap.values); // [ 41, 39, 33, 18, 27, 12 ]