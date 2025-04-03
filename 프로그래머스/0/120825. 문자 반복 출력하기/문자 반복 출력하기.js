function solution(my_string, n) {
    const str_arr = my_string.split('')
    return str_arr.reduce((acc, cur) =>{
        acc += cur.repeat(n)
        return acc
    }, '');;
}