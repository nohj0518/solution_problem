function solution(n, lost, reserve) {
    const n_clothes = lost.filter((v) => !reserve.includes(v)).sort((a,b) => a-b)
    const y_clothes = reserve.filter((v) => !lost.includes(v)).sort((a,b) => a-b)
    n_clothes.map((v) => {
        let i;
        if(y_clothes.includes(v-1)) {
            i = y_clothes.indexOf(v-1)
            y_clothes.splice(i, 1)
        } else if(y_clothes.includes(v+1)) {
            i = y_clothes.indexOf(v+1)
            y_clothes.splice(i, 1)
        } else {
            n--;
        }
    })
    return n;
}