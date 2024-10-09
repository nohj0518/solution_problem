function solution(s) {
     const regex = /^[0-9]*$/;
    if(s.length == 4 || s.length == 6) {
        return regex.test(s)
    } else return false
    
}