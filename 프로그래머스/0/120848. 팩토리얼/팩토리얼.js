function solution(n) {
    let factorial = [0, 1]
    const factorial_f = (x) => {
        if(x < 2) return factorial[1]
        else return x * factorial[x-1]
    }
    
    for(let i=1; i <= 10; i++) {
        factorial[i] = factorial_f(i)
    }
    let answer = 0
    for(let i=0; i < factorial.length; i++){
        if( factorial[i] == n) {
            answer = i;
            break
        } else if(factorial[i] > n) {
            answer = i-1;
            break
        }
    }
    
    return answer;
}