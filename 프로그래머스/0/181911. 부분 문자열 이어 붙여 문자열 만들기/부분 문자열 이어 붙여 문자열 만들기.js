function solution(my_strings, parts) {
    const result = parts.reduce((acc, [s,e], i) => {
        const t = my_strings[i].slice(s,e+1);
        return acc += t;
    },'')
    return result;
}