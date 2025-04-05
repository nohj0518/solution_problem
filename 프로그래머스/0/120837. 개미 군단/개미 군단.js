function solution(hp) {
    let curHp = hp;
    let totalAnt = 0;
    [5, 3, 1].map((x) => {
        const xAnt = Math.floor(curHp / x)
        curHp -= x * xAnt
        totalAnt += xAnt
    })
    return totalAnt;
}