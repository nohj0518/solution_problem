function solution(N, stages) {
    var answer = [];
    // 실패율 = 스테이지에 도달했으나 아직 클리어 x 플레이어 / 스테이지에 도달한 플레이어
    // 전체 스테이지 갯수 N
    // 현재 사용자가 멈춰있는 스테이지 번호가 담긴 stages
    // 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담긴 배열을 return
    const people = stages.length
    const dictionaryFailed = {};
    const dictionaryPeopleCnt = {};
    
    for(let i=1; i <= N; i++){
        dictionaryPeopleCnt[i] = 0
        dictionaryFailed[i] = 0
    }
    stages.map((stage) => {
        dictionaryPeopleCnt[stage]++
    })
    let sum = 0;
    for(let i=1; i <= N; i++) {
        let challengers = people - sum
        sum += dictionaryPeopleCnt[i]
        dictionaryFailed[i] = dictionaryPeopleCnt[i] / challengers
    }
    const result = Object.entries(dictionaryFailed).sort((a, b) => {
        return b[1] - a[1]
    });
    return result.map((kv) => parseInt(kv[0]));
}