function solution(my_string) {
    const arr = my_string.split('').map((s) => s.charCodeAt());
    const result = arr.map((a) => {
        if(a >= 97){
            return a-32
        } else {
            return a+32
        }
    })
    return  String.fromCharCode(...result);
}