function solution(a, b, n) {
    var answer = 0;
    while(Math.floor(n / a) > 0) {
        const x = Math.floor(n / a);
        answer += x * b; // 받은 새 콜라 갯수 x * b
        // 그리고 다음 회차에서 가져갈 콜라 빈병의 갯수
        n = (x * b) + (n % a)
    }
    return answer;
}