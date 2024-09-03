function solution(array, commands) {
    var answer = [];
    return commands.map((cmd) =>{
        const [i,j,k] = cmd
        const sorted = array.slice(i-1,j).sort((a,b)=>a-b)
        return sorted[k-1]
    })
}