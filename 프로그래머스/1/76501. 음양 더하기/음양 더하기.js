function solution(absolutes, signs) {
    var answer = 0;
    for(let i=0; i< absolutes.length; i++){
        const flag = signs[i] ? 1 : -1;
        answer += absolutes[i] * flag
    }
    return answer;
}