function solution(ingredient) {
    let madeCnt = 0;
    const hamburger = [1, 2, 3, 1]
    const stack = []
    
    const check = (stack) => {
        const sliced = stack.slice(-4)
        if(sliced.length < 4) return false
        for(let i=0; i<sliced.length; i++){
            if(sliced[i] != hamburger[i]) return false
        }
        stack.splice(-4, 4)
        return true
    }
    let i = 0;
    while(i < ingredient.length){
        stack.push(ingredient[i])
        if(check(stack)){
            madeCnt++;
        }
        i++;
    }
    
    return madeCnt;
}