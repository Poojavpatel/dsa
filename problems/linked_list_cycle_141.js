// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
// Internally, pos is used to denote the index of the node that tail's next pointer is connected to. 
// Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.

var hasCycle = function(head) {
  if(head === null) return false;
   
   let fast = head.next;
   let slow = head;
 
   while(fast && fast.next){
      if(fast === slow) return true;
      
      fast = fast.next.next;
      slow = slow.next;
   }
   return false;
};