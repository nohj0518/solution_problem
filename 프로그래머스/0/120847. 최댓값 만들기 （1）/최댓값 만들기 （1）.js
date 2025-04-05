function solution(numbers) {
    let max = -1;
    for(let i = 0; i < numbers.length; i++){
        for(let j = i+1; j < numbers.length; j++){
            const x = numbers[i] * numbers[j]
            if(max < x) max = x;
        }
    }
    return max;
}