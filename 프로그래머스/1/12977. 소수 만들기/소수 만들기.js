function solution(nums) {
    var answer = 0;
    const checkPrime = (prime) => {
        for(let i = 2; i*i <= prime; i++){
            if(prime % i == 0) return false
        }
        return true
    }
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                const sum = nums[i]+nums[j]+nums[k];
                if(checkPrime(sum)) {
                    answer++
                }
            }
        }
    }
    return answer;
}