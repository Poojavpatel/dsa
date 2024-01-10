import { ListNode } from "./92_reverse_linked_list_2";
/* 
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Input: head =[1,3,5,7,9,11,13,15], left = 3, right = 6
Output: [1,3,11,9,7,5,13,15]

Input: head =[10,20,30,40,50,60,70,80], left = 3, right = 6
Output: [10,20,60,50,40,30,70,80]

Input: head = [3,5], left = 1, right = 2
Output: [5,3]

Input: head = [3,5], left = 2, right = 2
Output: [3, 5]
*/

/*
  Assume this list and reverse list, left 3, right 6 
  10-20-30-40-50-60-70-80-null
  10-20-60-50-40-30-70-80-null

  keep these separate 70-80-null | 30-40-50-60-70-80-null
  prevChain = 70-80-null
  current = 30-40-50-60-70-80-null
  
  for right-left+1 cycles
*/

function reverseBetween2(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (!head?.next) {
    return head;
  }

  if (left == right) {
    return head;
  }

  let nextValue: ListNode = head;
  let node = head;
  let current: ListNode = head;
  let initialNode: ListNode | null = null;
  let i: number = 1;
  const cycles: number = right - left;

  while (i < right && node) {
    if (i == left - 1) {
      initialNode = node;
    }
    if (i == left) {
      current = node;
    }
    node = node.next!;
    i++;
  }
  let prevChain: ListNode = node?.next!;

  /* left right greater then length */
  if (left > i) {
    return head;
  }

  initialNode && (initialNode.next = null);
  i = 0;

  while (i <= cycles && current) {
    nextValue = current.next!;
    current.next = prevChain;
    prevChain = current;
    current = nextValue;
    i++;
  }

  if (!initialNode) {
    /* reversing entire list */
    head = prevChain;
  } else {
    /* reversing part of list */
    initialNode.next = prevChain;
  }

  return head;
}

function createListHead(values: number[]): ListNode | null {
  let head = new ListNode(values[0]);
  let current = head;

  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }

  return head;
}

const values = [10, 20, 30, 40, 50, 60, 70, 80];
const listHead = createListHead(values);
const result = reverseBetween2(listHead, 3, 6);
console.log(result);
console.log("--result--", JSON.stringify(result));
