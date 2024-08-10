function solution(my_string, s, e) {
    var answer = '';
    const reversed = my_string.split('').slice(s, e+1).reverse().join('');
    const target = my_string.split('').slice(s, e+1).join('');
    
    return my_string.replace(target, reversed);;
}