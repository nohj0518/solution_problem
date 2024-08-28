function solution(n_str) {
    const index = n_str.split('').findIndex((n)=> n != '0');
    return n_str.split('').slice(index).join('');
}