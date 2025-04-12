function solution(board, moves) {
    var answer = 0;
    let stack = [];
    const maps = {};
    for(let i=0; i < board.length; i++) {
        maps[i] = [];
    }
    
    for(let i=0; i < board.length; i++) {
        for(let j=0; j < board.length; j++) {
            maps[i] = [...maps[i], board[j][i]]
        }
    }
    
    
    const check = (doll) => {
        return doll == stack[stack.length-1]
    }
    
    moves.map((move) => {
        const m = move - 1;
        const i = maps[m].findIndex((a) => a > 0)
        if(i > -1 ) {
            // 인형을 뽑음
            const doll = maps[m][i]
            maps[m][i] = 0;
            if(!check(doll)){
                stack.push(doll)
            } else {
                stack.pop()
                answer++
            }
        }
        
    })
    
    return answer*2;
}