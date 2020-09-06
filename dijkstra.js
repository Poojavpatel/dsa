class WeighedGraph{
  constructor(){
    this.list = {};
  }
  addVertex(vertex){
    if(!this.list[vertex]) this.list[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight){
    if(!this.list[vertex1] || !this.list[vertex2]) return undefined;
    this.list[vertex1].push({vertex:vertex2, weight});
    this.list[vertex2].push({vertex:vertex1, weight});
  }
}

class PriorityQueue{
  constructor(){
    this.values = [];
  }
  enqueue(vertex, shortestDist){
    this.values.push({vertex, shortestDist});
    this.values.sort((a,b) => a.shortestDist - b.shortestDist);
  }
  dequeue(){
    return this.values.shift();
  }
}

const graph = new WeighedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'F', 1);
graph.addEdge('D', 'E', 3);
graph.addEdge('E', 'F', 1);
