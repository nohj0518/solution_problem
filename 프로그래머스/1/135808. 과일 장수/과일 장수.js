function solution(k, m, score) {
    let sum = 0;
    const sortedScore = score.sort((a,b) => b - a) // 사과 점수들을 정렬
    const boxLen = Math.floor(score.length / m);
    for(let i=0; i < boxLen ; i++){
        const minAppleScore = sortedScore[i*m + (m-1)]
        const price = minAppleScore * m;
        sum += price
    }
    return sum;
}