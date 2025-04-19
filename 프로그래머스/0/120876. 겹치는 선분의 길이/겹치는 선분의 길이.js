
function solution(lines) {
    const temp = [...lines]
    const flat = [...temp].flatMap((a) => a).sort((a,b)=> a-b)
    
    const min = flat[0];
    const max = flat[flat.length-1];
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