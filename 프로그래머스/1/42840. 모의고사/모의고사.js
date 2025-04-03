function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    let scores = [0, 0, 0];
    for([i, answer] of answers.entries()){
        for([j, pattern] of patterns.entries()){
            if(answer == pattern[i%pattern.length]) {
                scores[j] += 1
            }
        }
    }
    let max = Math.max(...scores);
    
    const maxs = scores.map((s,i) => {
        if(s == max) return i+1
    }).filter((a)=>a);
    return maxs;
}