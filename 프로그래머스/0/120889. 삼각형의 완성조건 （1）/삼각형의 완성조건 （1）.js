function solution(sides) {
    const sorted = sides.sort((a,b) => b-a);
    const [a,b,c] = sorted;
    if (b+c > a) return 1;
    else return 2;
}