function solution(num, k) {
    const arr = num.toString().split('')
    return arr.includes(`${k}`) ? arr.indexOf(`${k}`)+1 : -1;
}