function solution(dartResult) {
    // 다트게임은 총 3회
    // 각 기회마다 얻을 수 있는 점수는 0~10점
    // 영역 S(1제곱) D(2제곱) T(3제곱)
    // 옵션 : 스타상(*)- 해당판 점수 2배 바로 전 점수 2배  아차상(#)-해당 판 점수 마이너스
    // 스타상(*)은 첫번째 판에서도 나올 수 있음 이때는 해당판만 2배
    // 스타상(*)은 중첩가능(4배 가능) 아차상(#)과 중첩 가능 (-2배 가능)
    // SDT는 각 판마다 하나씩 존재
    // 스타상(*) 아차상(#)은 각 판마다 둘 중 하나만 존재 가능, 존재하지 않을수 있음
    const prizes = []
    const record = dartResult.match(/\d+[^\d]+/g).map((game) => {
        const [score] = game.match(/\d+/g)
        const [zone] = game.match(/[S|D|T]/g)
        const prize = game.match(/[#*]/g)
        if(prize) prizes.push(...prize)
        else prizes.push('')
        let totalScore = 0
        switch(zone) {
            case 'S':{
                totalScore = Math.pow(score, 1)
                break
            }
            case 'D':{
                totalScore = Math.pow(score, 2)
                break
            }
            case 'T':{
                totalScore = Math.pow(score, 3)
                break
            }
        }
        return totalScore
    })
    for(let i=0; i < 3; i++){
        const score = record[i]
        const prize = prizes[i]
        if(prize === "*"){
            if(i > 0){
                const sscore = record[i-1]
                record[i-1] = sscore * 2
            }
            record[i] = score * 2
        } else if(prize ==='#'){
            record[i] = score * (-1)
        } else {
            record[i] = score
        }
    }
    return record.reduce((acc,cur)=> acc+=cur, 0);
}