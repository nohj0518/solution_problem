function solution(arr) {
    let i =0
    while(arr.length > 2**i) {
        ++i;
    }
    const size= 2**i - arr.length;
    return [...arr, ...Array(size).fill(0)];
}