function solution(s) {
    const x = s.split('');
    if(s.length % 2 == 0) {
        return x[s.length/2 -1] + x[s.length/2]
    } else {
        return x[Math.floor(s.length/2)]
    }
}