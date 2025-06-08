function solution(s, n) {
    const code = s.split('');
    const ascii = code.map((c) => {
        const regexUpper = /^[A-Z]$/;
        const regexLower = /^[a-z]$/;
        const origin = c.charCodeAt()
        const converted = origin + n;
        if(regexUpper.test(c)) {
            // c가 대문자인 경우
            if(90 < converted) return converted - 26
            else return converted
        } else if(regexLower.test(c)){
            // c 가 소문자인 경우
            if(122 < converted) return converted - 26
            else return converted
        } else return origin;
    });
    
    return String.fromCharCode(...ascii);
}