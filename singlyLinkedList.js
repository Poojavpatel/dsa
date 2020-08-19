class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const a = new Node(5);
// a.next = new Node(10);
// a.next.next = new Node(15);
// console.log(a);

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
  traverse() {
    let node = this.head;
    while(node){
      console.log(node.val);
      node = node.next;
    }
  }
  pop() {
    // find out the secondLastNode, set its next to null, set it as tail return last node, length--
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
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return node;
  }
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
}

const a = new SinglyLinkedList();
a.push(5);
a.push(10);
a.push(15);
a.push(20);
console.log(a);
// a.traverse();
// a.pop();
// a.traverse();
// console.log(a);
// a.shift();
// console.log(a);
a.unshift(2);
console.log(a);