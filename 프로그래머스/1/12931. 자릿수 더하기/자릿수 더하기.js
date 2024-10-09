function solution(n)
{
    const arr = n.toString().split('').map(Number);
    
    return arr.reduce((acc, cur) => acc+=cur);
}