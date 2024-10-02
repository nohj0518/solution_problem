const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, S] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)

let answer = Infinity;
let en = 0;
let sum = 0;

for (let st = 0; st < arr.length; st++) {
  while (en < arr.length && sum < S) {
    sum += arr[en];
    en++;
  }

  if (sum >= S) {
    answer = Math.min(answer, en - st);
  }
  // st가 증가하므로 해당 값을 sum에서 빼줌
  sum -= arr[st];
}

answer = answer === Infinity ? 0 : answer;

console.log(answer);

