function solution(s) {
    return s.split('')
        .sort((a, b) => {
        const lowerA = a.toLowerCase();
        const lowerB = b.toLowerCase();
        const upperA = a.toUpperCase();
        const upperB = b.toUpperCase();
        if (lowerA === lowerB) { // 같은 문자일 경우
            return a < b ? 1 : -1; // 소문자가 먼저옴
        } else if(upperA === a && lowerB === b){ // a가 대문자인 경우
            return 1 // 소문자인 b 가 먼저오도록 함
        } else if(upperB === b && lowerA === a){ // b가 대문자인 경우
            return -1 // 소문자인 a 가 먼저오도록 함
        } else return b.localeCompare(a); // 다른 문자일 경우 사전순
        })
        .join('');
}