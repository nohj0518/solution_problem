function solution(quiz) {
    return quiz.map((q) => {
       const [first, cmd, second, e, x] = q.split(' ')
       const res = cmd == '+' ? +first + +second : +first - +second
       return x == res ? 'O' : 'X'
    })
}