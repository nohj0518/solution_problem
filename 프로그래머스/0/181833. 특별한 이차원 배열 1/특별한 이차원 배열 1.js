function solution(n) {
    let answer = new Array(n).fill().map((_,i) => new Array(n).fill(0).map((_,j)=> {
        if(i==j) return 1
        else return 0
    }));
    return answer;
}