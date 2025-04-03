function solution(rsp) {
    return rsp.split('').reduce((acc, cur) => {
        let x = ''
        if(cur == 2) x = '0'
        if(cur == 0) x = '5'
        if(cur == 5) x = '2'
        return acc += x

    },'');
}