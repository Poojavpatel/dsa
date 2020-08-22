class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  insert(value){
    // if no root assign value as root
    // decide left or right
    // if no left or right, assign it as left or right node
    if(!this.root){
      this.root = new Node(value);
      return this;
    }
    let node = this.root;
    while(node){
      if(value === node.value) return undefined;
      if(value<node.value){
        if(!node.left){
          node.left = new Node(value);
          return this;
        }
        node = node.left;
      }
      else {
        if(!node.right){
          node.right = new Node(value);
          return this;
        }
        node = node.right;
      }
    }
  }

  find(value){
    if(!this.root) return null;
    let node = this.root;
    while(node){
      if(value === node.value) return true;
      if(value < node.value){
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return false;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(7);
tree.insert(3);
tree.insert(25);
tree.insert(2);
console.log('--tree--', tree);
// console.log('--tree.find(2)--', tree.find(2));
// console.log('--tree.find(15)--', tree.find(15));
// console.log('--tree.find(1)--', tree.find(1));
// console.log('--tree.find(49)--', tree.find(49));