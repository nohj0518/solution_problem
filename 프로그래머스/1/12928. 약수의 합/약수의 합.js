function solution(n) {
    let x = [];
    for(let i=1; i <= n; i++){
        if(n%i==0) x.push(i); 
    }
    return x.reduce((acc,cur) => acc+=cur, 0);
}