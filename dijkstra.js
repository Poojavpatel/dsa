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
  dijkstra(start, finish){
    let visited = [];
    const queue = new PriorityQueue();
    const distances = {};
    const previous = {};
    let smallest;
    let path = [];
    for(let node in this.list){
      if(node === start){
        distances[node] = 0;
        queue.enqueue(node, 0);
      }else{
        distances[node] = Infinity;
        queue.enqueue(node, Infinity);
      }
      previous[node] = null;
    }
    while(queue.values.length){
      // select the node with the shortest distances from the priority queue
      smallest = queue.dequeue().vertex;
      // if its the end node we are done
      if(smallest === finish){
        while(previous[smallest]){
          path.push(smallest);
          smallest = previous[smallest]; 
        }
        path.push(smallest);
        return path.reverse();
      }
      // look at each of its neighbours
      for(let connection of this.list[smallest]){
        // if not visited and if newDist is less then update everywhere
        if(!visited.includes(connection.vertex)){
          let initialDistance = distances[connection.vertex];
          let newDist = connection.weight + distances[smallest];
          if(newDist < initialDistance){
            distances[connection.vertex] = newDist;
            queue.enqueue(connection.vertex, newDist);
            previous[connection.vertex] = smallest;
          }
        }
      }
      // since all neighbours of are done, and add it to visited
      visited.push(smallest);
    }
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
console.log(graph.dijkstra('A','E')); // [ 'A', 'C', 'D', 'F', 'E' ]
console.log(graph.dijkstra('A','B')); // [ 'A', 'B' ]
console.log(graph.dijkstra('A','F')); // [ 'A', 'C', 'D', 'F' ]
console.log(graph.dijkstra('B','C')); // [ 'B', 'A', 'C' ]
console.log(graph.dijkstra('B','F')); // [ 'B', 'E', 'F' ]
