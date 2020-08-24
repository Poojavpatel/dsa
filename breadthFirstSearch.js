/*
                10
            6       15
          3   8         20

 visited = [10, 6, 15, 3, 8, 20]
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
  // place root node in queue
  // while anything in queue
  // take first element out and put in visited
  // check if it has left add that in queue, check if right put it in queue
  breadthFirstSearch(){
    let queue = [];
    let visited = [];
    queue.push(this.root);
    while(queue.length){
      const node = queue.shift();
      visited.push(node.value);
      if(node.left){
        queue.push(node.left);
      }
      if(node.right){
        queue.push(node.right);
      }
    }
    return visited;
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
console.log(tree.breadthFirstSearch());
