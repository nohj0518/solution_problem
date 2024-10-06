function solution(numbers) {
    const sum=numbers.reduce((acc,cur)=> {
        return acc+cur
    },0)
    return 45-sum;
}