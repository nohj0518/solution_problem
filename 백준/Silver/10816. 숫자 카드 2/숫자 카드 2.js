const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (input) => {
    const N = +input[0];
    const A = input[1].split(" ").map(Number).sort((a,b) => a-b);
    const B = input[3].split(" ").map(Number);

    let answer = [];
    B.forEach(
        value => {
            const loweridx = lower(A, value, 0, N-1);
            const upperidx = upper(A, value, 0, N-1);
            let result = 0
            if (loweridx !== -1 && upperidx !== -1 ){
                result = upperidx-loweridx+1
            } else {
                result = 0
            }
            answer.push(result);
        }
    );
    console.log(answer.join(' '));
};

const lower = (array, target, start, end) => {
  let answer = -1;
  while(start<=end){
      mid = Math.floor((start+end)/2)
      if(array[mid] === target){
          answer = mid
          end = mid -1 ;
      }else if(array[mid]>target){
          end = mid-1;
      }else{
          start = mid+1
      }
  }
  return answer;
};

const upper = (array, target, start, end) => {
  let answer = -1;
  while(start<=end){
      mid = Math.floor((start+end)/2)
      if(array[mid] === target){
          answer = mid
          start = mid + 1;
      }else if(array[mid]>target){
          end = mid-1;
      }else{
          start = mid+1
      }
  }
  return answer;
};

solution(input);
// 3 0 0 1 2 0 0 2
