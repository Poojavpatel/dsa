class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const a = new Node(5);
// a.next = new Node(10);
// a.next.next = new Node(15);
// console.log(a);

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // if no node add node and set is as head, tail and length ++
    // if nodes present, add new node, set next of previous node as this node, set this node as tail, length ++
    if (this.length) {
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
    while (node) {
      console.log(node.val);
      node = node.next;
    }
  }
  pop() {
    // find out the secondLastNode, set its next to null, set it as tail return last node, length--
    if (!this.head) return undefined;
    let node = this.head;
    let secondLastNode = null;
    while (node.next) {
      secondLastNode = node;
      node = node.next;
    }
    secondLastNode.next = null;
    this.tail = secondLastNode;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return node;
  }
  shift() {
    // set head as head.next, length--
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = this.head.next;
    this.length -= 1;
    if (this.length === 0) {
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
    if (this.length === 1) {
      this.tail = newNode;
    }
    return newNode;
  }
  search(val) {
    if (val < 0) return null;
    let counter = 0;
    let node = this.head;
    while (node && node.val !== val) {
      counter++;
      node = node.next;
    }
    if (node === null) {
      return null;
    }
    return counter;
  }
  get(index) {
    if (index < 0) return null;
    let counter = 0;
    let node = this.head;
    while (node && counter !== index) {
      node = node.next;
      counter++;
    }
    return node;
  }
  set(index, value) {
    let node = this.get(index);
    if (!node) return null;
    node.val = value;
    return node;
  }
  insert(index, value) {
    if (index < 0) return null;
    if (index === 0) return this.unshift(value);
    const node = this.get(index - 1);
    const newNode = new Node(value);
    newNode.next = node.next;
    node.next = newNode;
    this.length++;
    return this;
  }
  remove(index) {
    if (index < 0) return null;
    if (index === 0) return this.shift();
    const node = this.get(index);
    const prevNode = this.get(index - 1);
    prevNode.next = node.next;
    this.length--;
    return node;
  }

  // reverse linked list in place
  /* In-Place Reversal: Time Complexity: O(n) Space Complexity: O(1) */
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = null;
    let prev = null;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  /* In-Place Reversal: Time Complexity: O(n) Space Complexity: O(1) */
  reverse2() {
    if (!this.head) {
      return this.head;
    }
    let previousChain = null;
    let current = this.head;
    let nextChain = current.next;
    while (current) {
      nextChain = current.next;
      current.next = previousChain;
      previousChain = current;
      current = nextChain;
    }
    return previousChain;
  }

  /* Using a Stack: Time Complexity: O(n) Space Complexity: O(n) */
  reverseUsingStack() {
    if (!this.head?.next) {
      return head;
    }

    const stack = [];
    // Traverse the linked list and push each node onto the stack
    let current = head;
    while (current) {
      stack.push(current);
      current = current.next;
    }

    // Pop elements from the stack and update next pointers
    const reversedHead = stack.pop();
    current = reversedHead;
    while (stack.length > 0) {
      const nextNode = stack.pop();
      current.next = nextNode;
      current = nextNode;
    }
    current.next = null;
    return reversedHead;
  }

  reverseRecursivelyUtil(current, previous) {
    if (!current) {
      // Base case: reached the end of the list
      this.head = previous;
      return;
    }

    const nextNode = current.next; // Save the reference to the next node
    current.next = previous; // Reverse the link

    // Recursively reverse the rest of the list
    this.reverseRecursivelyUtil(nextNode, current);
  }

  /* Using Recursion: Time Complexity: O(n) Space Complexity: O(n) */
  reverseRecursively() {
    this.reverseRecursivelyUtil(this.head, null);
  }
}

const a = new SinglyLinkedList();
a.push(5);
a.push(10);
a.push(15);
a.push(20);
a.push(25);
console.log(a);
// a.traverse();
// a.pop();
// a.traverse();
// console.log(a);
// a.shift();
// console.log(a);
// a.unshift(2);
// console.log(a);
// console.log('15 is at index : ', a.search(15));
// console.log('25 is at index : ', a.search(25));
// console.log('-1 is at index : ', a.search(-1));
// console.log('7 is at index : ', a.search(7));
// console.log('Element on index -1 is : ', a.get(-1));
// console.log('Element on index 3 is : ', a.get(3));
// console.log('Element on index 6 is : ', a.get(6));
// console.log(a.set(2,12));
// console.log(a.insert(3,16));
// a.traverse();
// console.log(a.remove(3));
a.traverse();
console.log(a.reverse());
a.traverse();
