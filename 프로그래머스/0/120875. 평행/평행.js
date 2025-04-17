function solution(dots) {
    const [A, B, C, D] = dots;
    const getG = (dot1, dot2) =>{
        const [x1, y1] = dot1;
        const [x2, y2] = dot2; 
        return (y2 - y1) / (x2 - x1)
    }
    switch(true){ 
        case getG(A,B) === getG(C,D):
        case getG(A,C) === getG(B,D):
        case getG(A,D) === getG(B,C):
            return 1;
        default:
            return 0;
    }
}