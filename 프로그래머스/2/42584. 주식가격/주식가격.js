function solution(prices) {
    var answer = [];
    for(let i=0; i< prices.length; i++) {
        const top = prices[i];
        
        let size = 0;
        for(let j=i+1; j < prices.length; j++){
            if(top > prices[j]) {
                // 가격이 떨어짐
                size = j-i;
                break;
            }else {
                size++;
            }
        }
        answer.push(size)
    }
    
    return answer;
}