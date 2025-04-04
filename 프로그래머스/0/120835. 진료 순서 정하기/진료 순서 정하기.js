function solution(emergency) {
    const sorted =  [...emergency].sort((a,b) => b-a);
    const rankMap = new Map(sorted.map((val, idx) => [val, idx + 1]));
    return emergency.map((val) => rankMap.get(val));
}