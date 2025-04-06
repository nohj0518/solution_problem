function solution(numbers, direction) {
    if(direction == 'right'){
        const right = numbers[numbers.length - 1];
        const rest = numbers.slice(0, -1);
        return [right, ...rest]
    } else {
        const [left, ...rest] = numbers;
        return [...rest, left]
    }
}