function solution(s) {
    const dictionary = {
        "zero" : 0,
        "one" : 1,
        "two" : 2,
        "three" : 3,
        "four" : 4,
        "five" : 5,
        "six" : 6,
        "seven" : 7,
        "eight" : 8, 
        "nine" : 9,
    }
    // 정규식으로 숫자 또는 연속된 영문자를 추출
    const parts = s.match(/\d|[a-zA-Z]+/g);
    // 숫자는 숫자로, 문자는 그대로 처리
    const result = parts.map(part => {
        if(/^\d$/.test(part)){
            return Number(part) 
        } else {
            for(const d in dictionary){
              part = part.replaceAll(d, dictionary[d])
            }
            return part
        }
    });
    return +result.join('');
}