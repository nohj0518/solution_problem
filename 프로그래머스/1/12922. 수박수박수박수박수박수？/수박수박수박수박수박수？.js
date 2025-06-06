function solution(n) {
    const answer = new Array(n).fill('').map((s, i)=> {
        if(i % 2 == 0) return '수'
        else return '박'
    });
    return answer.join('');
}