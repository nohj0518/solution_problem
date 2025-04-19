
function solution(lines) {
    const temp = [...lines]
    const sorted1 = [...temp].sort(([a1, b1], [a2, b2]) => a1 - a2)
    const sorted2 = [...temp].sort(([a1, b1], [a2, b2]) => b2 - b1)
    
    const min = sorted1[0][0];
    const max = sorted2[0][1];
    console.log(min, max)
    
    const dictionary = {}
    for(let i=min; i < max+1; i++){
        dictionary[i] = 0;
    }

    lines.map((line) => {
        const [s,e] = line
        for(let i=s+1; i<e+1; i++){
            dictionary[i]++;
        }
    })
    
    return Object.values(dictionary).filter((a) => a > 1).length
}