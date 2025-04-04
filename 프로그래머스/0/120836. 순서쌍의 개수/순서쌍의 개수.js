function solution(n) {
    let cnt = 0;
    for(let i=1; i<= Math.floor(n/2); i++){
        if(n%i == 0) cnt++;
    }
    return cnt+1;
}