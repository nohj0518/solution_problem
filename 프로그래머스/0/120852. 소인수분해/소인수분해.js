function solution(n) {
    let answer = [];
    let i = 2;
    while( n > 1){
        if(n % i == 0) {
            n = n / i;
            answer.push(i)
        } else {
            i++
        }
    }
    return [...new Set(answer)];
}