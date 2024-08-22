function solution(arr) {
    var answer = [];
    const x = arr.indexOf(2);
    const y = arr.lastIndexOf(2);
    if(x == -1&& y ==-1) return [-1];
    if(x == y) return [2];
    return arr.slice(x, y+1);
}