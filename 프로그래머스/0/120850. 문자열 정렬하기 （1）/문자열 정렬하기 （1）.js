function solution(my_string) {
    const only_num = [...my_string].filter((s) => /[0-9]/g.test(s)).map((a) => +a)
    return only_num.sort((a,b) => a-b);
}