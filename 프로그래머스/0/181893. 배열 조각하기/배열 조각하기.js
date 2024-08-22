function solution(arr, query) {
    query.map((q,i) =>{
        if(i%2==0) {
            // i가 짝수면 뒷부분을 자른다
            arr.splice(q+1);
        } else {
            // 홀수면 앞부분을 자른다
            arr.splice(0, q);
        }
    })
    return arr;
}