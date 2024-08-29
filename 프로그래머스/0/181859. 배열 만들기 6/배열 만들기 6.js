function solution(arr) {
    let stk = [];
    for(let i=0; i < arr.length; i++){
        if(stk.length == 0) stk.push(arr[i])
        else if(stk.slice(-1) == arr[i]) stk.splice(-1)
        else if(stk.slice(-1) != arr[i]) stk.push(arr[i])
    }
    if(stk.length == 0) return [-1]
    else return stk;
}