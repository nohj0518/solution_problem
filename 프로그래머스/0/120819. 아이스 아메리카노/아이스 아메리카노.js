function solution(money) {
    let cnt = 0;
    let total_price = 0;
    let exchange = 0;
    while(money > total_price){
        ++cnt;
        total_price = (5500 * cnt);
        exchange = money-total_price
        if(exchange < 0) cnt--;
    }
    return [cnt, money -  (5500 * cnt)];
}