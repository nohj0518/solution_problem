function solution(numbers, k) {
    let pattern = [];
    if(numbers.length % 2 == 0){
        pattern = numbers.filter((a,idx) => idx % 2 == 0)
    } else {
        pattern = [...numbers, ...numbers].filter((a,idx) => idx % 2 == 0)
    }
    return pattern[(k-1)% pattern.length];
}