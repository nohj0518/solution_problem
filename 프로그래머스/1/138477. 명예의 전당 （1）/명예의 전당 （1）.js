function solution(k, score) {
    var answer = [];
    let winners = [];
    for(let i=0; i< score.length; i++) {
        const min = winners.length > 0 ? Math.min(...winners) : -1;
        const todayScore = score[i]
        if(winners.length < k) {
            winners.push(todayScore);
        } else {
            if(todayScore > min) {
                winners.pop()
                winners.push(todayScore)
            }
        }
        
        winners = winners.sort((a,b) => b-a);
        answer.push(Math.min(...winners))
    }
    return answer;
}