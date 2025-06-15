function solution(number, limit, power) {
    const people = new Array(number).fill().map((_,i) => {
        const person = i+1
        let cnt = 0; // 약수의 갯수
        for(let j=1; j*j<=person; j++){
            if(j*j == person) cnt++
            else if(person % j == 0) cnt += 2; 
        }
        return cnt
    });
    return people.reduce((acc, cur) => {
       return acc += cur > limit ? power : cur
    }, 0)
    
}