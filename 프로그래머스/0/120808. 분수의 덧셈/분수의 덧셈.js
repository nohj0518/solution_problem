function solution(numer1, denom1, numer2, denom2) {
  //분자와 분모를 공통 분모로 만들어주기
  const denom = denom1 * denom2;
  const numer = numer1 * denom2 + numer2 * denom1

  //분자와 분모를 최대공약수로 나눠주기
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const gcdValue = gcd(numer, denom);

  //기약분수로 만들어주기
  const answer = [numer / gcdValue, denom / gcdValue];

  return answer;
}