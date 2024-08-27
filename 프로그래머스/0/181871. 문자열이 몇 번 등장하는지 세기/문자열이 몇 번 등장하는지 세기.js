function solution(myString, pat) {
    let answer = 0;
    for(let i=0; i < myString.length; i++){
        if(pat == myString.slice(i, i+pat.length)) answer += 1;
    }
    return answer;
}