function solution(array) {
    let answer = 0;
    array.map((num) => {
        const str = num.toString();
        const sevens = str.split('').filter((a) => a == '7')
        answer += sevens.length
    })
    return answer;
}