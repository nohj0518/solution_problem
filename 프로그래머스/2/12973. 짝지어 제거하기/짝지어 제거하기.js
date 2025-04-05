function solution(s) {
    const str = s.split('');
    let stack = []
    const check = () => {
        if(stack.length < 2) return false
        return stack[stack.length-1] === stack[stack.length-2]
    }
    for(let i=0; i < s.length; i++) {
        stack.push(str[i])
        if(check()){
            stack.pop();
            stack.pop();
        }
    }
    return stack.length == 0 ? 1: 0;
}