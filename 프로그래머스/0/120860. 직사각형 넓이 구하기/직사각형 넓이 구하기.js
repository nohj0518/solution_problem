function solution(dots) {
    var answer = 0;
    const [x, y, z, w] = dots
    console.log(x, y, z, w)
    let a,b = 0;
    if(x[0] != y[0]){
        a = Math.abs(x[0] - y[0])
    } else {
        a =  Math.abs(x[0] - z[0])
    }
    
    if(x[1] != y[1]){
        b = Math.abs(x[1] - y[1])
    } else {
        b =  Math.abs(x[1] - z[1])
    }
    
    
    return a*b;
}