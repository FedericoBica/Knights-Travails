function knightMoves(start,end){
    const directions = [
        [1, 2], [2, 1], [2, -1], [1, -2],
        [-1, -2], [-2, -1], [-2, 1], [-1, 2]
    ];

    const isValid = (x,y) => x >= 0 && x < 8 && y >= 0 && y < 8;

    const queue = [[start]];
    const visited = new Set();
    visited.add(start.toString());

    while(queue.length > 0) {
        const path = queue.shift();
        const [x,y] = path[path.lenght-1];
        if(x === end[0] && y === end[1]){
            return path;
        }
        
        for(const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            const next = [newX, newY];
            const key = next.toString();

            if(isValid(newX, newY) && !visited.has(key)){
                visited.add(key);
                queue.push([...path, next])
            }
        }
    }

    return [];
}



