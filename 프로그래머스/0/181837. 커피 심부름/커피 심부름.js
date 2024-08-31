function solution(order) {
    let answer = 0;
    order.map((o)=>{
        if(o.includes('americanoice')) answer += 4500
        else if(o.includes('cafelatte')) answer += 5000
        else answer += 4500
    })
    return answer;
}