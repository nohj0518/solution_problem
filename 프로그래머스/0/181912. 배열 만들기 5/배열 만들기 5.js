function solution(intStrs, k, s, l) {
    const res = [];
    intStrs.forEach((str) => {
        const num = str.slice(s,s+l);
        if(num > k) return res.push(parseInt(num));
    })
    return res
}