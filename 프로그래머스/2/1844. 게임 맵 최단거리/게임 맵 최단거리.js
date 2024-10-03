function solution(maps) {
    var answer = 0;
    
    const R = maps.length;
    const C = maps[0].length;

    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    
    let visited = Array(R).fill().map((r) => new Array(C).fill(0))
    
    
    const bfs = () => {
        const queue = [];
        visited[0][0] = 1;
        queue.push([0,0]);
        while(queue.length>0){
            let [x, y] = queue.shift();
            for(let dr=0; dr < 4; dr++){
                let nx = x+dx[dr];
                let ny = y+dy[dr];
                if(nx<0 || ny<0|| nx >=R || ny >=C) continue;
                if(visited[nx][ny] >0 || maps[nx][ny] ===0) continue;
                visited[nx][ny] = visited[x][y]+1;
                queue.push([nx,ny]);
            }
        }
    }
    bfs();
    if(visited[R-1][C-1] === 0) return -1
    else return visited[R-1][C-1];
}