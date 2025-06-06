function solution(n, m) {
    var answer = [];
    // 최대공약수 구하기
    const gcd = (a, b) => {
      while (b > 0) {
        let temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    };

    // 최소공배수 구하기
    const lcm = (a, b) => {
      return (a * b) / gcd(a, b);
    };
    return [gcd(n,m) , lcm(n,m)];
}