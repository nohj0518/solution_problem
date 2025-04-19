function solution(a, b) {
    var answer = 0;
    const getD = (n) => {
        const result = [];
        let divisor = 2;
        while(n >= 2){
            if(n % divisor == 0){
                result.push(divisor);
                n = Math.floor(n/divisor);
            } else {
                divisor++;
            }
        }
        return result
    }
    let A = getD(a)
    let B = getD(b)
    
    B = B.map((x) => {
        const p = A.indexOf(x) 
        if(p > -1){
            A.splice(p, 1)
            return 
        } else return x
    }).filter((x) => x)
    
    
    return B.filter((x) => ![2, 5].includes(x)).length > 0 ? 2:1;
}