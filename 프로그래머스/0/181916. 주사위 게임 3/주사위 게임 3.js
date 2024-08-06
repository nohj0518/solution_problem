function solution(a, b, c, d) {
    var answer = 0;
    const setNum = new Set([a,b,c,d]);
    const dict = {};
    
    for(const val of [a,b,c,d]) {
        dict[val] = [a,b,c,d].filter((x) => x === val).length
    }

    if(setNum.size === 1){
        return 1111 * a;
    } else if(setNum.size === 4){
        return Math.min(a,b,c,d);
    } else if(setNum.size === 3) {
        let result = 1;
        for (const [key, value] of Object.entries(dict)) {
            if(value !== 2) result *= key
        }
        return result;
    } else if(setNum.size === 2 && Object.values(dict).includes(2)){
        const [p, q]=[...setNum];
        return (p+q) * Math.abs(p-q);
    } else {
        let p = 0;
        let q = 0;
        for (const [key, value] of Object.entries(dict)) {
            if(value === 3){
                p = +key;
            } else if(value === 1) {
                q = +key;
            }
        }
        return ((10*p) + q)**2;
    }
}