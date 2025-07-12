function solution(lottos, win_nums) {
    // 1-45 중 6개를 찍어서 맞춰야 win
    // 1등 6개 - 2등 5개 - 3등 4개 - 4등 3개 - 5등 2개
    // 낙서 때문에 알아볼 수 없는 번호 0
    const getWinner = (n) =>{
        switch(n){
            case 6: return 1;
            case 5: return 2;
            case 4: return 3;
            case 3: return 4;
            case 2: return 5;
            default: return 6;
        }
    }
    const min = lottos.filter((t) => win_nums.includes(t)).length
    const nope = lottos.filter((l) => l == 0).length
    return [getWinner(min+nope), getWinner(min)];
}