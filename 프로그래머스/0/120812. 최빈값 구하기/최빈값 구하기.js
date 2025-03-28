function solution(array) {
    var answer = 0;
    const t = [...new Set(array)];
    const dictionary = {};
    for(const a of t) {
        dictionary[a] = 0; 
    }
    for(const a of array){
        dictionary[a]++;
    }
    let max = 0;
    let max_key = 0;
    Object.entries(dictionary).map(([key, value]) => {
        if(max == value) max_key = -1
        if(max < value) {
            max = value;
            max_key = key;
        }
    })
    return parseInt(max_key);
}