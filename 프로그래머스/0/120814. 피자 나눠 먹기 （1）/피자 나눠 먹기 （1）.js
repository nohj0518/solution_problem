function solution(n) {
    let x = Math.floor(n/7);
    let y = n%7;
    if(y==0) return x
    return x+1;
}