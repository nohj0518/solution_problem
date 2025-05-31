function solution(M, N) {
    var answer = 0;
    // 가로 M 세로 N
    answer += M - 1
    answer += (N-1) * M
    return answer;
}