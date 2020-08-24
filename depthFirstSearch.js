/*
                10
            6       15
          3   8         20

 preOrder = [10,6,3,8,15,20] root left right
 inOrder = [3,6,8,10,15,20] left root right
 postOrder = [3,8,6,20,15,10] left right root

*/

class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree{
  constructor(){
    this.root = null;
  }
  insert(value){
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
  // root left right
  preOrderDFS(){
    const result = [];
    function traverse(node){
      result.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }
  // left root right
  inOrderDFS(){
    const result = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      result.push(node.value);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }
  // left right root
  postOrderDFS(){
    const result = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      result.push(node.value);
    }
    traverse(this.root);
    return result;
  }
}

const tree = new Tree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log('--tree--', tree);
console.log('--preOrderDFS--', tree.preOrderDFS());
console.log('--inOrderDFS--', tree.inOrderDFS());
console.log('--postOrderDFS--', tree.postOrderDFS());