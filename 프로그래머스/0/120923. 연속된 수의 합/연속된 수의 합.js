function solution(num, total) {
    var answer = [];
    let x = new Array(num).fill().map((_,i) => i)
    let sum = x.reduce((acc, cur) => acc+=cur, 0);
    while(sum !== total){
        if( sum < total ) {
            // total 보다 작으면 sum 이 오른쪽으로 (+)
            x = [...x.slice(1), x[num-1]+1]
        } else {
            // total 보다 크면 sum 이 왼쪽으로 (-)
            x = [ x[0]-1, ...x.slice(0, x.length-1)]
        }
        sum = x.reduce((acc, cur) => acc+=cur, 0);
    }
    return x;
}