function solution(food) {
    var answer = '';
    const [water, ...foods] = food;
    answer = foods.reduce((acc,cur,idx) => {
        const cnt = Math.floor(cur/2)
        const food_id = idx+1
        acc += food_id.toString().repeat(cnt);
        return acc
    },'')
    
    return answer + '0' + answer.split('').reverse().join('');
}