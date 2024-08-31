function solution(a, b) {
    switch(true) {
        case a%2==1 && b %2==1:
            return a**2 + b**2
        case a%2==0 && b %2 ==0:
            return Math.abs( a-b)
        default:
            return 2*(a+b)
    }
}