function solution(s) {
    let answer = '';
    const key = [...new Set(s)];
    const dictionary = {}
    for(const k of key){
        dictionary[k] = 0;
    }
    s.split('').map((k) => {
        dictionary[k]++
    })
    for(const d in dictionary){
        if(dictionary[d] == 1) answer+= d
    }
    return answer.split('').sort().join('');
}