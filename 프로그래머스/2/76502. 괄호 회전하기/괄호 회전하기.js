function solution(s) {
    let answer = 0;
    let arr = s.split('')
    const OPEN = ['[', '{', '('];
    const check = (list) => {
        let stack = [];
        for(const l of list){
            if(OPEN.includes(l)) stack.push(l);
            else {
                // 닫힘일때는 상황에 맞게 pop()
                if((l == ']' && stack[stack.length-1] == '[') ||
                   (l == '}' && stack[stack.length-1] == '{')||
                   (l == ')' && stack[stack.length-1] == '(') ){
                    stack.pop()
                } else if (stack.length == 0) return false
            }
        }
        return stack.length == 0;
    }
    for(let x=0; x < s.length ; x++){
        // arr이 올바른 괄호인지 체크하고 cnt++ 하는 부분
        if(check(arr)) answer++;
        // 회전 시키는 부분
        const front = arr.shift();
        arr = [...arr, front]
        
    }
    return answer;
}