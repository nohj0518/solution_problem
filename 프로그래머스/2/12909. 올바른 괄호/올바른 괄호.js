function solution(s){
    const OPEN = '(';
    const CLOSE = ')';
    let stack = [];
    let stack_ = [];
    for (const a of s){
        if(a == OPEN) stack.push(a)
        else if(a == CLOSE && stack[stack.length-1] == OPEN) {
            stack.pop()
        } else {
            stack_.push(a)
        }
        
    }
    
    return stack.length == 0 && stack_.length == 0;
}