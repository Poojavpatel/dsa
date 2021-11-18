class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if(this.length){
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
  }

  print() {
    let node = this.head;
    while(node){
      console.log('--->', node.val);
      node = node.next;
    }
  }

  reverse() {
    if(!this.head){
      return this.head;
    }
    let previousChain = null;
    let current = this.head;
    let nextChain = current.next;
    while(current){
      nextChain = current.next;
      current.next = previousChain;
      previousChain = current;
      current = nextChain;
    }
    return previousChain;
  }
}

const list = new SingleLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
// list.print();
console.log(list.reverse());