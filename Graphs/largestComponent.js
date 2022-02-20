// largest component
// https://structy.net/problems/largest-component

const largestComponent = (graph) => {
    let largestConnectedGraph = 0;
    const visited = new Set();
    for (node in graph) {
        // check value > largestConnectedGraph
        let latestNodeCount = explore(graph, node, visited);
        if (latestNodeCount > largestConnectedGraph) {
            largestConnectedGraph = latestNodeCount;
        }
    }
    return largestConnectedGraph;
};

const explore = (graph, current, visited) => {
    if (visited.has(current)) return 0;
    visited.add(current);

    let size = 1;
    for (let neighbour of graph[current]) {
        size += explore(graph, neighbour, visited);
    }

    return size;
};
