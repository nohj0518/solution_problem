function solution(rank, attendance) {
    const filtered= rank.filter((v,i) => attendance[i]).sort((a,b)=>a-b).slice(0,3);
    const numbered = filtered.map((f,i) =>{
        return rank.indexOf(f)
    })
    const [a,b,c] = numbered;
    return 10000 * a + 100 * b + c;
}