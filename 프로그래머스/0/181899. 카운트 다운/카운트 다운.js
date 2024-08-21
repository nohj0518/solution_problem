function solution(start_num, end_num) {
    return new Array(start_num - end_num + 1).fill().map((n) => start_num--);
}