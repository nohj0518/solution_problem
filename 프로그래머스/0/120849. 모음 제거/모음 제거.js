function solution(my_string) {
    const regexp = /([a,e,i,o,u])/g;
    return my_string.replace(regexp, '');;
}