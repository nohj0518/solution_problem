function solution(s) {
    const words = s.split(' ');
    const result = words.map((word)=>{
        const w = word.split('');
        return w.map((t,i)=> i%2==0 ? t.toUpperCase() : t.toLowerCase()).join('')
    })
    return result.join(' ');
}