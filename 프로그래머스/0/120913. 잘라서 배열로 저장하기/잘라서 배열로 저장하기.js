function solution(my_str, n) {
    var answer = [];
    for(let i= 0; i < my_str.length; i+=n){
        const a = my_str.substr(i, n);
        answer.push(a)
    }
    return answer;
}