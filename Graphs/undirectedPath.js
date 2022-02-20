// Undirected Path
// https://structy.net/problems/undirected-path

const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = makeGraph(edges);
    return hasPath(graph, nodeA, nodeB, new Set());
  };
  
  const hasPath = (graph, src, dst, visited) =>{
    if (src === dst) return true;
    if (visited.has(src)) return false;
    visited.add(src);
    
    for (let neighbour of graph[src]){
      if(hasPath(graph, neighbour, dst, visited)) return true;
  
    }
    
    return false
  }
  
  
  const makeGraph = (edges) =>{
    const graph = {};
    
    for(let edge of edges){
      const [a, b] = edge;
      if(!(a in graph)) graph[a] = [];
      if(!(b in graph)) graph[b] = [];
      graph[a].push(b);
      graph[b].push(a);
    }
    return graph