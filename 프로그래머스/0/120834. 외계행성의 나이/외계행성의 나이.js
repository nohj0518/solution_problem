function solution(age) {
    const str = String(age);
    const answer = [...str].map((s) => {
        const ascii = s.charCodeAt() + 49
        return String.fromCharCode(ascii)
    })
    return answer.join('');
}