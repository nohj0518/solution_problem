function solution(array, n) {
    var answer = 0;
    array.map((a) => {
        if(a == n) answer++;
    })
    return answer;
}