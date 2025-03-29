function solution(slice, n) {
    // 피자 1판당 slice 조각
    // 사람 수 n 명
    // n 명의 사람이 최소 한조각 이상 피자를 먹어야함
    // 사람 10명 1판당 7조각 => 2판(14조각)
    // 사람 12명 1판당 4조각 => 3판(12조각)
    let pizza = 1;
    for(let pizza= 1; pizza <=n; pizza++){
        const total_slice = pizza*slice;
        if(total_slice >= n) return pizza
    }
}