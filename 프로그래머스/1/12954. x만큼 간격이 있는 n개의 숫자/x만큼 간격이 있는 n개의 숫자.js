function solution(x, n) {
    const result = new Array(n).fill(1).map((a,idx) => {
        return x*(idx+1)
    })
    return result;
}