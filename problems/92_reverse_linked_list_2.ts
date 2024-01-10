/* 
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Input: head =[1,2,3,4,5,6,7,8], left = 3, right = 6
Output: [1,2,6,5,4,3,7,8]
*/

/* 
If i copy paste ListNode in another class i get "Duplicate error"
If i don't i get "Cannot find name 'ListNode'" error 
To fix it, ie have the ListNode class defined in one file and use it in another without getting any errors, export from here and import in another class
*/
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class LinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(value: number) {
    const node = new ListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = this.tail!.next;
    }

    this.length++;
  }

  print() {
    let node = this.head;

    while (node?.val) {
      console.log("-->", node.val);
      node = node.next!;
    }
  }

  reverseLeftToRight(
    head: ListNode | null,
    left: number,
    right: number
  ): ListNode | null {
    if (!head?.next) {
      return head;
    }

    /*
    Assume this list and reverse list, left 3, right 6 
    1-2-3-4-5-6-7-8-null
    1-2-6-5-4-3-7-8-null

    keep these separate 7-8-null | 3-4-5-6-7-8-null
    prevChain = 7-8-null
    current = 3-4-5-6-7-8-null
    
    till current.value is 6

    nextValue = current.next   4-5-6-7-8-null  5-6-7-8-null  6-7-8-null      7-8-null
    current.next = prevChain   3-7-8-null      4-3-7-8-null  5-4-3-7-8-null  6-5-4-3-7-8-null
    prevChain = current        3-7-8-null      4-3-7-8-null  5-4-3-7-8-null  6-5-4-3-7-8-null
    current = nextValue        4-5-6-7-8-null  5-6-7-8-null  6-7-8-null      7-8-null
    */

    let nextValue: ListNode = head;
    let node = head;
    let current: ListNode = head;
    let initialNode: ListNode = head;

    while (node.next && node.val !== right) {
      if (node.next?.val == left) {
        initialNode = node;
      }
      if (node.val == left) {
        current = node;
      }
      node = node.next!;
    }

    /* if value not in list */
    if (!node?.next) {
      return head;
    }

    let prevChain: ListNode = node.next!;
    initialNode.next = null;

    while (prevChain.val !== right) {
      nextValue = current.next!;
      current.next = prevChain;
      prevChain = current;
      current = nextValue;
    }

    initialNode.next = prevChain;
    return head;
  }
}

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  const myList = new LinkedList();
  return myList.reverseLeftToRight(head, left, right);
}

const myList = new LinkedList();
const input = [1, 2, 3, 4, 5, 6, 7, 8];
const left = 3;
const right = 6;
for (let i = 0; i < input.length; i++) {
  myList.insert(input[i]);
}
myList.print();
myList.reverseLeftToRight(myList.head, left, right);
myList.print();

/*
Here i reversed by value, I was supposed to by index 
Input: head = [3,5], left = 1, right = 2
my Output: [3,5] since left and right values are not in list
expected output: [5,3]
*/
