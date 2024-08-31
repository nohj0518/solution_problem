function solution(myString) {
    return myString.split('').map((s) => {
        const code = s.charCodeAt();
        return code < 108 ? 'l' : s
    }).join('');
}