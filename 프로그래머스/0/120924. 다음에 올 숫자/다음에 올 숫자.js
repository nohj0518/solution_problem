function solution(common) {
    var answer = 0;
    let d = common[1] - common[0];
    let dd = common[1] / common[0];
    let a0 = common[0]
    if( common[2] == common[1]+d) {
        answer= common[common.length-1] + d
    } else if( common[2] == common[1]*dd){
        answer= common[common.length-1] * dd
    }

    return answer;
}