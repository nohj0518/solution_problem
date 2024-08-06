function solution(number) {
    const sum = number.split('').reduce((acc, cur) => {
        return acc += +cur
    }, 0);
    
    return sum%9;
}