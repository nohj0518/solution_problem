function solution(arr, intervals) {
    const [first, second] = intervals;
    const section1 = arr.slice(first[0], first[1]+1);
    const section2 = arr.slice(second[0], second[1]+1);
    return [...section1, ...section2];
}