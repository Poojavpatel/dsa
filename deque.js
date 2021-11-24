// Double-ended queue
// Implement Deque using Linked List
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const node = new Node(val);
    if(this.length == 0){
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
  // remove element from front
  shift() {
    if(!this.head) return undefined;
    const node = this.head;
    this.head = node.next;
    this.length --;
    if(this.length == 0){
      this.tail = null;
    }
    return node;
  }

  traverse() {
    let node = this.head;
    while(node) {
      console.log('-->', node.val);
      node = node.next;
    }
  }
}

class Deque {
  constructor() {
    this.list = new LinkedList();
  }
  // Insert an element to the end of a queue
  enqueue(val) {
    this.list.push(val);
  }
  // Remove an element from front of a queue
  dequeue() {
    this.list.shift();
  }
  print() {
    this.list.traverse();
  }
}

const myqueue = new Queue();
myqueue.enqueue(1);
myqueue.enqueue(2);
myqueue.enqueue(3);
myqueue.enqueue(4);
myqueue.print();
myqueue.dequeue();
myqueue.print();
myqueue.enqueue(5);
myqueue.enqueue(6);
myqueue.print();
myqueue.dequeue();
myqueue.dequeue();
myqueue.print();