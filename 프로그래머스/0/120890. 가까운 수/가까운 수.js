function solution(array, n) {
    const sorted = array.sort((a,b) => b - a)
    const diffs = sorted.map((a) => {
        const diff = a - n
        return diff
    })
    for(let i =0; i<diffs.length; i++) {
        if(diffs[i]<0){
            if(diffs[i-1]) {
                if(Math.abs(diffs[i]) <= Math.abs(diffs[i-1])) return sorted[i]
                else return sorted[i-1]
            }
            return sorted[i]
        }
        if(diffs[i]==0) return sorted[i]
    }
    return sorted[0]
}