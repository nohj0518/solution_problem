function solution(my_string, queries) {
    queries.map(([s,e]) => {
        const splited = my_string.split('');
        const reversed_part = splited.slice(s,e+1).reverse();
        const converted = [...splited.slice(0,s), ...reversed_part, ...splited.slice(e+1, splited.length)];
        my_string = converted.join('')
    })
    return my_string;
}