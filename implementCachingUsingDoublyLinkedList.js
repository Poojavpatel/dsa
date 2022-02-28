// Implement a caching system 

// store = {
//   name : "Pooja",
//   age : 24,
// }

// Node = {
//     value : value,
//     next : null
// }

// List = {
//     this.head = null,
//     this.tail = null,
//     this.length = 0;
//     values = [
//     ],
//     valuesHash = {

//     }
//     addToValues : (val) => {
//         currentVode = Node(val);
//         if(this.length >= maxLength) {
//             node = this.head.next;
//             this.head = node;
//         }
//         lastNode.next = currentVode;
//     }

// }

// store : 

// getValue(key){
   
// }

// clearCache(){
//     //
// }

// addToCache(){
//     addToValues(val)
// }



// doubly linked list 

class Node{
    constructor(key, value){
        this.value = {key : value};
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToEndOfList(value) {
        const node = new Node(value);
        if(this.length == 0){
            this.head = node;
            this.tail = node;
        } else {
            // this.tail.next = node;
            // this.tail = node;
            if(this.length >= maxLength){
                
            }
        }
        this.length++;
    }
    
    getLeastRecentlyUsed(){
        return this.head;
    }

    getValue(key){
        let traversingNode = this.head;
        while(traversingNode){
            if(traversingNode.key == key) {
                addToEndOfList(traversingNode.value);
                return traversingNode.value;
            }
            traversingNode = traversingNode.next;
        }
    }
}