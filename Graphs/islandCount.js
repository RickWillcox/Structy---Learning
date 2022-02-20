// Island count
// https://structy.net/problems/island-count

const islandCount = (grid) => {
    let totalIslands = 0;
    const visited = new Set();
    for (let x = 0; x < grid.length; x += 1) {
        for (let y = 0; y < grid[0].length; y += 1) {
            console.log(visited);
            if (exploreIsland(grid, x, y, visited)) {
                totalIslands += 1;
            }
        }
    }
    return totalIslands;
};

const exploreIsland = (grid, x, y, visited) => {
    const xInbounds = 0 <= x && x < grid.length;
    const yInbounds = 0 <= y && y < grid[0].length;
    if (!xInbounds || !yInbounds) return false;

    if (grid[x][y] === "W") return false;

    const pos = x + "," + y;
    if (visited.has(pos)) return false;
    visited.add(pos);

    exploreIsland(grid, x - 1, y, visited);
    exploreIsland(grid, x + 1, y, visited);
    exploreIsland(grid, x, y - 1, visited);
    exploreIsland(grid, x, y + 1, visited);

    return true;
};
