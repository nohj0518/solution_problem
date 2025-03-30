function solution(n, k) {
    const free_drink = Math.floor(n/10);
    return 12000*n + 2000*(k - free_drink);
}