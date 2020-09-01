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
  // remove the vertex and all of its connections and it from all connections
  removeVertex(vertex){
    if(!this.list[vertex]) return undefined;
    for(var connection of this.list[vertex]){
      this.removeEdge(vertex, connection);
    }
    delete this.list[vertex];
  }
}

const graph = new Graph();
graph.addVertex('Tokyo');
graph.addVertex('Rio');
graph.addVertex('Denver');
graph.addVertex('Hongkong');
console.log(graph); // Graph { list: { Tokyo: [], Rio: [], Denver: [], Hongkong: [] } }
graph.addEdge('Tokyo', 'Rio');
graph.addEdge('Tokyo', 'Denver');
graph.addEdge('Hongkong', 'Denver');
graph.addEdge('Hongkong', 'Rio');
// console.log(graph); // Graph { list: { Tokyo: [ 'Rio', 'Denver' ], Rio: [ 'Tokyo', 'Hongkong' ], Denver: [ 'Tokyo', 'Hongkong' ], Hongkong: [ 'Denver', 'Rio' ] } }
graph.removeEdge('Tokyo', 'Denver');
console.log(graph); // Graph { list: { Tokyo: [ 'Rio' ], Rio: [ 'Tokyo', 'Hongkong' ], Denver: [ 'Hongkong' ], Hongkong: [ 'Denver', 'Rio' ]}}
// graph.removeVertex('Hongkong');
// console.log(graph); // Graph { list: { Tokyo: [ 'Rio' ], Rio: [ 'Tokyo' ], Denver: [] } }