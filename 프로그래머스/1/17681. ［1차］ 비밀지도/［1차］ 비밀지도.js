function solution(n, arr1, arr2) {
    var answer = [];
    for(let i=0; i < n; i ++) {
        const binary1 = arr1[i].toString(2).padStart(n, '0');
        const binary2 = arr2[i].toString(2).padStart(n, '0');
        let row = ''
        for(let j=0; j<n; j++){
            if(binary1[j] > 0 || binary2[j] > 0) row += '#'
            else row += ' '
        }
        answer.push(row)
    }
    return answer;
}