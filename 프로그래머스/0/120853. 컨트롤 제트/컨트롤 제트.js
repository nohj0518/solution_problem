function solution(s) {
    const arr = s.split(' ');
    for(let i=0; i < arr.length; i++){
        if(arr[i] == 'Z'){
            arr.splice(i-1, 2)
            i--;
        }
    }
    return arr.reduce((acc,cur) => acc+=+cur, 0);
}