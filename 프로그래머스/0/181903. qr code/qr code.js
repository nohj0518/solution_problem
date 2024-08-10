function solution(q, r, code) {
    const result = code.split('').filter((t, idx) => {
        return idx % q == r
    })
    return result.join('');
}