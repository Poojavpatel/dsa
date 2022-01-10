class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(){
    this.root = null;
    this.length = 0;
  }
  add(value){
    const node = new Node(value);
    if(this.length == 0){
      this.root = node;
    } else {
      let queue = [this.root];
      while(queue.length){
        if(!queue[0].left){
          queue[0].left = node;
          return this;
        }
        if(!queue[0].right){
          queue[0].right = node;
          return this;
        }
        queue.push(queue[0].left);
        queue.push(queue[0].right);
        queue.shift();
      }
    }
    this.length++;
    return this;
  }
}

const tree = new BinaryTree();
tree.add(1);
tree.add(2);
tree.add(3);
tree.add(4);
tree.add(5);
console.log(tree);