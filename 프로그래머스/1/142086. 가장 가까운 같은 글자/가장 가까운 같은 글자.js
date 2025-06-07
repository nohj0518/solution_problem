function solution(s) {
    var answer = [];
    const arr = s.split('');
    for(let i=0; i<s.length; i++){
        const me = arr[i];
        let check = false;
        let result = 1;
        for(let j=i-1; j>=0; j--){
            if(me == arr[j]) {
                check = true;
                break;
            }
            else result++;
        }
        if(!check) result = -1;
        answer.push(result)
    }
    return answer;
}