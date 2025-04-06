function solution(num_list, n) {
    let answer = [];
    const row = Math.floor(num_list.length / n);
    for(let i=0; i < row; i++){
        const x = num_list.splice(0,n);
        answer.push(x)
    }
    return answer;
}