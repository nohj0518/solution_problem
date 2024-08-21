function solution(my_string, indices) {
    var answer = '';
    const result = my_string.split('');
    const sorted = indices.sort((a,b)=>a-b);
    sorted.map((ind) => {
        result[ind] = '';
    })
    return result.join('');
}