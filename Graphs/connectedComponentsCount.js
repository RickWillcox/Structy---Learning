// connected components count
// https://structy.net/problems/connected-components-count

const connectedComponentsCount = (graph) => {
    let count = 0;
    const visited = new Set();

    for (node in graph) {
        if (explore(graph, node, visited) === true) {
            count += 1;
        }
    }
    console.log(count);
    return count;
};

const explore = (graph, current, visited) => {
    if (visited.has(String(current))) return false;
    visited.add(String(current));

    for (let neighbour of graph[current]) {
        explore(graph, neighbour, visited);
    }
    return true;
};
