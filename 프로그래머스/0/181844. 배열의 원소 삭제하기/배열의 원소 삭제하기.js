function solution(arr, delete_list) {
    delete_list.map((v) => {
        if(arr.includes(v)) {
            arr = arr.filter((a) => a!=v)
        }
    })
    return arr;
}