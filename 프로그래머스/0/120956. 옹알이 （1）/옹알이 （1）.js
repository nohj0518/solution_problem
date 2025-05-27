function solution(babbling) {
    var answer = 0;
    const available = ["aya", "ye", "woo", "ma"];
    babbling.map((ba) => {
        let tmp = ba
        available.map((av) =>{
           tmp = tmp.replace(av, ' ');
        })
        if(tmp.trim() === '') answer++;
    })
    return answer;
}