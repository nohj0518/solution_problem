function solution(A, B) {
    var answer = 0;
    let a = A.split('');
    const b = B.split('');
    let c = [...a];
    while(!(c.every((x,i) => x == b[i]))){
        for(let i=0; i < a.length; i++) {
            if(i === a.length-1) c[0] = a[i];
            else c[i+1] = a[i];
        }
        answer += 1;
        if(answer > a.length-1) {
            answer = -1;
            break;
        }
        a = [...c]
        
    }
    
    return answer;
}