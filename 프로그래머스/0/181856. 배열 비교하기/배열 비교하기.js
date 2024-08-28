function solution(arr1, arr2) {
    const sum1 = arr1.reduce((acc, cur)=>{return acc+=cur},0);
    const sum2 = arr2.reduce((acc, cur)=>{return acc+=cur},0);
    switch(true) {
        case arr1.length > arr2.length:
        case arr1.length == arr2.length && sum1 > sum2:
            return 1
        case arr1.length < arr2.length:
        case arr1.length == arr2.length && sum1 < sum2:
            return -1
        case arr1.length == arr2.length && sum1 == sum2:
            return 0
    }
}