function solution(n) {
    
    const arr = new Array(n).fill(0)
    
    for(let i=0; i < arr.length; i++){
        if(i == 0) {
            arr[i] = 1;
            continue;
        }
        let next = arr[i-1]+1
        if(next % 3 == 0 || `${next}`.includes('3')) {
            const getNext = () => {
                while(next % 3 == 0 || `${next}`.includes('3')){
                    next++
                }
                return next;
            }
            arr[i] = getNext()
        } else arr[i] = next
    }
    
    return arr[n-1];
}