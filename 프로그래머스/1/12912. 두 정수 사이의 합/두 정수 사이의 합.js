function solution(a, b) {
    let answer = 0;
    let st =  a <= b ? a : b;
    let ed =  a >= b ? a : b;
    for(let i=st; i<=ed; i++){
        answer += i;
    }
    return answer;
}