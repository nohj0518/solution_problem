function solution(arr, flag) {
    let X = [];
    flag.map((f,i) => {
        f ? X = [...X,...new Array(arr[i]*2).fill(arr[i])]
            : X = X.splice(0,X.length - arr[i]);
    })
    return X;
}