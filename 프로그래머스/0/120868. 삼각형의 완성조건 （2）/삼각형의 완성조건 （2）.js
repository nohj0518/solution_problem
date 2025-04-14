function solution(sides) {
    let answer = [];
    const sum = sides[0] + sides[1];
    for(let i =1; i < sum; i++) {
        if(Math.max(i, ...sides) == i && i < sum) answer.push(i)
    }
    const max = Math.max(...sides)
    const min = Math.min(...sides)
    for(let i = 1; i < max; i++){
        if(Math.max(i, ...sides) == max && i + min > max) answer.push(i)
    }
    return answer.length;
}