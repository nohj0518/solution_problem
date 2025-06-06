function solution(arr1, arr2) {
    const m = arr1.length;
    const n = arr1[0].length;
    let answer = Array.from(Array(m), () => new Array(n).fill(0));
    for(let i=0; i < arr1.length; i++) {
        for(let j=0; j<arr1[0].length; j++) {
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return answer;
}