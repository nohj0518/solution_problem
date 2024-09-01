function solution(picture, k) {
    // 가로로 k 배
    picture=picture.map((p)=>{
        const row = p.split('');
        const result = row.reduce((prev, cur) => {
            return prev += [...new Array(k).fill(cur)].join('')
        },'')
        return result
    })
    // 세로로 k 배
    let result = []
    picture.map((v) => {
        const test = new Array(k).fill(v);
        result.push(...test)
    })
    return result
}