function solution(arr, idx) {
    const sliced = arr.slice(idx);
    const result = sliced.findIndex((a)=> a == 1); 
    return result > -1 ? result + idx : -1;
}