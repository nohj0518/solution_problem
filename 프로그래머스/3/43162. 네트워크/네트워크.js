function solution(n, computers) {
    var answer = 0;
    
    let visited = Array(n).fill().map((x)=>new Array(n).fill(0))
    
    const dfs = (i,j) => {
        let stack = [];
        visited[i][j] = 1;
        stack.push([i,j]);
        while(stack.length > 0){
            let [x,y] = stack.pop();
            for(let i=0; i< n; i++){
                const nx = y;
                const ny = i;
                if(computers[nx][i]>0) {
                    if(nx<0|| ny <0|| nx >=n|| ny>=n) continue;
                    if(visited[nx][ny] > 0|| computers[nx][ny]==0) continue;
                    if(nx == ny) continue;
                    visited[nx][ny] = visited[x][y] + 1;
                    stack.push([nx,ny]);
                }
            }
        }
    }
    
    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j ++) {
            if(visited[i][j] >0 || computers[i][j]==0) continue;
            if(i == j) continue;
            dfs(i,j);
            answer +=1;
        }
    }
    
    let noWayCount = 0;
    for(let i=0; i<n; i++) {
        let checker = false;
        for(let j=0; j<n; j ++) {
            if(visited[i][j] >0) checker = true
        }
        if(!checker) noWayCount +=1
    }
    return answer+noWayCount;
}