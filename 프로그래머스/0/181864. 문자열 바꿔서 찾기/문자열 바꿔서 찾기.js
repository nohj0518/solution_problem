function solution(myString, pat) {
    const converted = myString.split('').map((str) => {
        return str == 'A' ? 'B' : 'A'
    }).join('')
    return converted.includes(pat)? 1:0;
}