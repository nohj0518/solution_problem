function solution(numbers) {
    const translate = ['zero', 'one', "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let t = numbers
    translate.forEach((s,i) =>{
        t = t.replaceAll(s, i)
    })
    
    return +t;
}