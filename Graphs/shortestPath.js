// shortest path
// https://structy.net/problems/shortest-path

const shortestPath = (edges, nodeA, nodeB) => {
    const graph = makeGraph(edges);
    let queue = [[nodeA, 0]];
    let visited = new Set();

    while (queue.length > 0) {
        const current = queue.pop();
        visited.add(current[0]);
        console.log(visited);

        for (let neighbour of graph[current[0]]) {
            if (visited.has(neighbour)) continue;
            if (neighbour === nodeB) return current[1] + 1;
            queue.push([neighbour, current[1] + 1]);
        }
    }
};

const makeGraph = (edges) => {
    const graph = {};

    for (let edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
};
