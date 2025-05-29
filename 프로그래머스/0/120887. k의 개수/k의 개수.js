function solution(i, j, k) {
    var answer = 0;
    for(let I = i; I <= j; I++){
        const x = I.toString().split('');
        const y = x.filter((n) => n == k);
        answer += y.length
    }
    return answer;
}