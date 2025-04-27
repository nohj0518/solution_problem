function solution(score) {  
    const avg = score.map(([eng, math]) => {
        return (eng+math)/2
    });
    const sorted = [...avg].sort((a,b) => b-a);
    const dictionary = {}
    sorted.forEach((s,i) => {
        if(!dictionary[s]) dictionary[s] = i+1 
    })
    return avg.map((x) => {
        return dictionary[x.toString()]
    })
    
}