function solution(before, after) {
    const before_arr = before.split('');
    let after_arr = after.split('');
    let answer = true;
    before_arr.map((a) => {
       const idx = after_arr.findIndex((x) => x === a)
       if(idx > -1) {
           after_arr.splice(idx, 1)
       } else answer = false
    })
    return answer && after_arr.length == 0  ? 1 : 0

}