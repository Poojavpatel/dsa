class Node{
  constructor(value, priority){
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue{
  constructor(){
    this.values = [];
  }

  enqueue(node){
    this.values.push(node);
    this.bubbleUp();
  }
  bubbleUp(){
    let index = this.values.length -1;
    let node = this.values[index];
    while(index > 0){
      let parentIndex = Math.floor((index-1)/2);
      let parentNode = this.values[parentIndex];
      if(node.priority >= parentNode.priority) break;
      this.values[parentIndex] = node;
      this.values[index] = parentNode;
      index = parentIndex;
    }
  }
  dequeue(){
    const higestPriority = this.values[0];
    const end = this.values.pop();
    if(this.values.length){
      this.values[0] = end;
      this.bubbleDown();
    }
    return higestPriority;
  }
  bubbleDown(){
    let index = 0;
    const node = this.values[index];
    while(true){
      let swap = false;
      let leftChildIndex = (2*index)+1;
      let rightChildIndex = (2*index)+2;
      let swapIndex = (rightChildIndex < this.values.length) && (this.values[rightChildIndex].priority < this.values[leftChildIndex].priority)
        ? rightChildIndex : leftChildIndex;
      if(swapIndex < this.values.length && node.priority > this.values[swapIndex].priority){
        swap = true;
        this.values[index] = this.values[swapIndex];
        this.values[swapIndex] = node;
        index = swapIndex;
      }
      if(!swap) break;
    }
  }
}

const hospitalQueue = new PriorityQueue();
hospitalQueue.enqueue(new Node('low fever', 5));
hospitalQueue.enqueue(new Node('concussion', 4));
hospitalQueue.enqueue(new Node('accident', 2));
hospitalQueue.enqueue(new Node('flu', 7));
hospitalQueue.enqueue(new Node('heart attack', 3));
hospitalQueue.enqueue(new Node('broken head', 1));
hospitalQueue.enqueue(new Node('head ache', 6));
console.log(hospitalQueue);
// { values: [{ value: 'broken head', priority: 1 },{ value: 'heart attack', priority: 3 },{ value: 'accident', priority: 2 },{ value: 'flu', priority: 7 },{ value: 'low fever', priority: 5 },{ value: 'concussion', priority: 4 },{ value: 'head ache', priority: 6 }]}

console.log(hospitalQueue.dequeue()); // { value: 'broken head', priority: 1 }
console.log(hospitalQueue);
// {values: [{ value: 'accident', priority: 2 },{ value: 'heart attack', priority: 3 },{ value: 'concussion', priority: 4 },{ value: 'flu', priority: 7 },{ value: 'low fever', priority: 5 },{ value: 'head ache', priority: 6 }]}