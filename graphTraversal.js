class Graph{
  constructor(){
    this.list = {};
  }
  addVertex(vertex){
    if(!this.list[vertex]) this.list[vertex] = [];
  }
  addEdge(vertex1, vertex2){
    if(!this.list[vertex1] || !this.list[vertex2]) return undefined;
    this.list[vertex1].push(vertex2);
    this.list[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2){
    if(!this.list[vertex1] || !this.list[vertex2]) return undefined;
    this.list[vertex1] = this.list[vertex1].filter(v => v !== vertex2);
    this.list[vertex2] = this.list[vertex2].filter(v => v !== vertex1);
  }
  removeVertex(vertex){
    if(!this.list[vertex]) return undefined;
    for(var connection of this.list[vertex]){
      this.removeEdge(vertex, connection);
    }
    delete this.list[vertex];
  }
  // Wrote it myself
  // used closure, can be done using simple function defination too
  // instead of using includes, maintain a hash
  dfsRecursive(vertex){
    let visited = [];
    let list = this.list;
    (function traverseRecursievely(vertex){
      visited.push(vertex);
      if(!(list[vertex] && list[vertex].length)) return null;
      for(let connection of list[vertex]){
        if(!visited.includes(connection)){
          traverseRecursievely(connection)
        }
      }
    })(vertex);
    return visited;
  }
  // writing own stack instead of using call stack
  dfsIteratievely(vertex){
    if(!vertex || !this.list[vertex]) return false;
    let result = [];
    let visited = {};
    let stack = [];
    stack.push(vertex);
    while(stack.length){
      const node = stack.pop();
      result.push(node);
      if(!visited[node]) visited[node] = true;
      for(let connection of this.list[node]){
        let peek = stack[stack.length - 1];
        if(!visited[connection] && peek !== connection) {
          stack.push(connection);
        }
      }
    }
    return result;
  }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');
console.log(graph);
// Graph {list: {A: [ 'B', 'C' ],B: [ 'A', 'D' ],C: [ 'A', 'E' ],D: [ 'B', 'E', 'F' ],E: [ 'C', 'D', 'F' ],F: [ 'D', 'E' ]}}
// console.log(graph.dfsRecursive('A')); // [ 'A', 'B', 'D', 'E', 'C', 'F' ]
console.log(graph.dfsIteratievely('A')); // [ 'A', 'C', 'E', 'F', 'D', 'B' ]