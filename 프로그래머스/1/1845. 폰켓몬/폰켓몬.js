function solution(nums) {
    var answer = 0;
    const N = nums.length // N 마리
    const M = Math.floor(N/2); // N/2 마리 선택할 수 있음
    nums // 중복이 있는 원소들 N개 중 M개를 뽑는 경우의 수 중, 가질 수 있는 서로다른 종류의 수의 최댓값
    const set = new Set(nums);
    const setLen = Array.from(set).length;
    
    return Math.min(setLen, M);
}