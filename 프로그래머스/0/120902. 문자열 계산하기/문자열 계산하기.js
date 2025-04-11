function solution(my_string) {
    const arr = my_string.split(' ');
    let stack = [];
    let result = parseInt(arr[0]);
    for(let i=1; i < arr.length; i+=2){
        stack.push(arr[i])
    }
    for(let i=2; i < arr.length; i+=2){
        const cmd = stack.shift();
        cmd == '+' ? result += parseInt(arr[i]): result -=parseInt(arr[i])
    }
    return result

}