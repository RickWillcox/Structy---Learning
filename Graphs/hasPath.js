// Has Path
// https://structy.net/problems/has-path

const hasPath = (graph, src, dst) => {
    if (src === dst) return true;
    for (let neighbour of graph[src]) {
        if (hasPath(graph, neighbour, dst)) return true;
    }
    return false;
};
