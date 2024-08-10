function solution(my_string, m, c) {
    var answer = '';
    const str = my_string.split('');
    for(let i=0; i< Math.floor(my_string.length/m) ; i++) {
        const row = str.splice(0,m);
        
        answer += row[c-1]
    }
    return answer;
}