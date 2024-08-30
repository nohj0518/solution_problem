function solution(str_list, ex) {
    let answer = '';
    str_list.map((str) => {
        if(str.includes(ex)) return
        else answer += str
    });
    return answer
}