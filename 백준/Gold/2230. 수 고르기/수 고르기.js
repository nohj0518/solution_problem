const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.map(Number).sort((a, b) => a - b);

let minDiff = Infinity;
let en = 0;
for (let st = 0; st < arr.length; st++) {
  while (en < arr.length && arr[en] - arr[st] < M) {
    en++;
  }
  if (en === N) break;
  minDiff = Math.min(minDiff, arr[en] - arr[st]);
}

console.log(minDiff);

