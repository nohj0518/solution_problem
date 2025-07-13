function solution(X, Y) {
    const x = X.split('')
    const y = Y.split('')
    let p1 =0;
    let pair = []
    const dictionaryX = {}
    x.map((xx) => {
        if(dictionaryX[xx]) dictionaryX[xx]++ 
        else dictionaryX[xx] = 1;
    })
    const dictionaryY = {}
    y.map((yy) => {
        if(dictionaryY[yy]) dictionaryY[yy]++ 
        else dictionaryY[yy] = 1;
    })
    for(const t in dictionaryX){
        if(Object.keys(dictionaryY).includes(t)){
            const repeat = Math.min(dictionaryX[t], dictionaryY[t])
            const arr = new Array(repeat).fill(Number(t))
            pair = [...pair, ...arr]
        }
    }
    if(pair.length == 0) return "-1"
    if(pair.filter((p) => p !== 0).length == 0) return "0"
    const sorted = pair.sort((a,b) => b-a)

    
    return sorted.join('')
}