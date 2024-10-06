function solution(price, money, count) {
    const x = new Array(count).fill().map((a,idx) => idx+1)
    const amountOfUse = x.reduce((acc,cur) => {
        return acc += cur*price
    },0)
    return money > amountOfUse ? 0 : amountOfUse - money

}