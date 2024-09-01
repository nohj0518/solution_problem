function solution(arr) {
    const row_cnt = arr.length;
    const col_cnt = arr[0].length;
    if(row_cnt > col_cnt) {
        const p = row_cnt-col_cnt;
        return arr.map((v) => [...v, ...new Array(p).fill(0)])
    } else if(row_cnt < col_cnt) {
        const v = col_cnt-row_cnt;
        return [...arr, ...new Array(v).fill().map((_)=>new Array(col_cnt).fill(0))]
    }
    else return arr
}