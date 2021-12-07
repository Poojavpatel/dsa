class Node {
  constructor(val, next = null, random = null){
    this.val = val;
    this.next = next;
    this.random = random;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addNode(val, next = null, random = null) {
    const node = new Node(val);
    if(!this.head){
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length ++;
    return this;
  }

  linkRandom(fromPosition, toPosition) {
    // const fromNode = this.getNodeAtIndex(fromPosition);
    // const toNode = this.getNodeAtIndex(toPosition);
    // fromNode.random = toNode;
    const fromNode = this.getNodeAtIndex(fromPosition);
    fromNode.random = this.getNodeAtIndex(toPosition);
  }

  // takes an index and returns the node at that index
  getNodeAtIndex(index){
    if(index >= this.length) return null;
    let position = 0;
    let node = this.head;
    while(position < index){
      node = node.next;
      position++;
    }
    return node;
  }

  // takes in node and returns the index of it in list
  getIndexOfNode(node, head){
    if(!node) return null;
    let index = 0;
    let listNode = head;
    while(listNode !== node){
      listNode = listNode.next;
      index++;
    }
    return index;
  }
}

const copyRandomList = function (head) {
  if(head == null) return null;
  // created an empty list
  const copiedList = new LinkedList();
  // add all the nodes
  let a = head;
  while(a) {
    copiedList.addNode(a.val);
    a = a.next;
  }
  // link randoms
  // to link a node to another we need fromPosition and toPosition
  // fromPosition we would have, for toPosition
  // randomNode = node.random, now traverse the full linkedList and find where this node is and return its index
  // create a generic function getIndexOfNode(node), takes in node and returns the index of it in list
  let traversingIndex = 0;
  let traversingNode = head;
  while(traversingNode){
    if(traversingNode.random){
      const linkedRandomIndex = copiedList.getIndexOfNode(traversingNode.random, head);
      copiedList.linkRandom(traversingIndex, linkedRandomIndex);
    }
    traversingNode = traversingNode.next;
    traversingIndex++;
  }
  console.log('--copiedList--', copiedList);
  return copiedList.head;
}

const list = new LinkedList();
list.addNode(7, null, null);
list.addNode(13, null, null);
list.addNode(11, null, null);
list.addNode(10, null, null);
list.addNode(1, null, null);
// console.log('--list--', list);
list.linkRandom(1, 0);
list.linkRandom(2, 4);
list.linkRandom(3, 2);
list.linkRandom(4, 0);
console.log('--list--', list);

const copiedListHead = copyRandomList(list.head);

// console.log('--list.head--', list.head);
// console.log('--list.head.next--', list.head.next);
// head of list
// <ref *1> {
//   val: 7,
//   next: {
//     val: 13,
//     next: { val: 11, next: [Object], random: [Object] },
//     random: [Circular *1]
//   },
//   random: null
// }

// head.next of list
// <ref *2> {
//   val: 13,
//   next: <ref *1> {
//     val: 11,
//     next: { val: 10, next: [Object], random: [Circular *1] },
//     random: { val: 1, next: null, random: [Object] }
//   },
//   random: { val: 7, next: [Circular *2], random: null }
// }
