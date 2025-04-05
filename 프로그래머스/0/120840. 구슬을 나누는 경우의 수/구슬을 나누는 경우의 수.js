function solution(balls, share) {
    const factorial = (n) => {
        if(n == 0) return 1;
        if(n == 1) return 1;
        return BigInt(n) * BigInt(factorial(n-1));
    }
    return BigInt(factorial(balls)) / (BigInt(factorial(balls-share)) * BigInt(factorial(share)));
}