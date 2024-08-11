function solution(my_string) {
    var answer = new Array(52).fill(0);
    const ref = new Array(52).fill('').map((c, idx) => {
        // 65 = 'A' 97 = 'a'
        if(65+idx < 91) return String.fromCharCode(65+idx)
        else return String.fromCharCode(97+idx-26)
    });
    const dict = {};
    my_string.split('').map((c) => {
        if(dict[c]) dict[c] += 1
        else dict[c] = 1;
    })
    
    Object.entries(dict).map(([key, value]) => {
        const index = ref.findIndex((r) => r === key);
        answer[index] = value;
    })
    
    return answer
}