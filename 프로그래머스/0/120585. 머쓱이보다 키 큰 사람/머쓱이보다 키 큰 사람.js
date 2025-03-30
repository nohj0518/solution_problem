function solution(array, height) {
    let answer = 0;
    array.map((p) => {
        if(p > height) answer++;
    } )
    return answer
}