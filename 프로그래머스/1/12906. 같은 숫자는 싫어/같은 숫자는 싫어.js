function solution(arr)
{
    const result = [];
    for(let i=0;i < arr.length; i ++){
        if(arr[i] != arr[i+1]){
            result.push(arr[i]);
        }
    }
    console.log(result);
    return result
}