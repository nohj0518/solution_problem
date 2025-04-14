function solution(sides) {
    let answer = 0;
    for(let i=1; i <= 2000; i++){
        const sorted = [i, ...sides].sort((a,b) => a-b);
        const [min, x, max] = sorted;
        if(max < min + x) ++answer;
    }
    return answer;
}