function solution(num_list, n) {
    var answer = [];
    return num_list.filter((num, idx) => {
        return idx%n==0
    });
}