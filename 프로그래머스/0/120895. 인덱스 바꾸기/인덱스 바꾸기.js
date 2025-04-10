function solution(my_string, num1, num2) {
    const x = my_string[num1];
    const y = my_string[num2];
    return my_string.split('').map((str,i) => {
        if(i == num1) return y
        if(i == num2) return x
        return str
    }).join('')
}