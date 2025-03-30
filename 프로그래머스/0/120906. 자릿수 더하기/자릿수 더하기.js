function solution(n) {
    return n.toString().split('').map((a) => +a).reduce((acc,cur) => acc += cur, 0);
}