function solution(board) {
    const N = board.length;
    for(let i=0; i < N; i++){
        for(let j=0; j < N; j++){
            if(board[i][j] == 1){
                const dx = [-1, 0, 1];
                const dy = [-1, 0, 1];
                for(const x of dx){
                    for(const y of dy){
                        const DX = i+x;
                        const DY = j+y;
                        if(DX >= N || DY >= N) continue;
                        if(DX < 0 || DY < 0) continue;
                        if(board[DX][DY] == 1) continue;
                        board[DX][DY] = 2;
                    }
                }
            }
        }
    }
    
    return board.flatMap((b) =>b).filter((b) => b==0).length;
}