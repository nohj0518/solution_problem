function solution(keyinput, board) {
    var answer = [];
    const [m,n] = board
    const M = Math.floor(m/2)
    const N = Math.floor(n/2)
    return keyinput.reduce((acc, cur) => {
        let [x,y] = acc
        let move = [];
        switch(cur) {
            case 'up':{
                move = [x, ++y]
                break;
            }
            case 'down':{
                move = [x, --y]
                break;
            }
            case 'left':{
                 move = [--x, y]
                break;
            }
            case 'right':{
                move = [++x, y]
                break;
            }
        }
        if(Math.abs(move[0]) > M || Math.abs(move[1]) > N) return acc
        return move
    },[0,0])
}