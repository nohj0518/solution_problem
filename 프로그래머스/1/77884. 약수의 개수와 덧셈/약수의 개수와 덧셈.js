function solution(left, right) {
    var answer = 0;
    while(left <= right){
        let cnt = 0;
        for(let i=1; i <= left ; i++){
            if(left % i ==0) cnt++; 
        }
        if(cnt % 2 == 0) answer += left
        else answer -= left
        left++;
    }
    return answer;
}