function solution(arr, k) {
    var answer = [];
    const set_arr = new Set(arr);
    const result = [...set_arr].slice(0, k)
    return result.length == k ? result : [...result,...Array(k).fill(-1)].slice(0,k)
}