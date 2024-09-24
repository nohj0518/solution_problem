const fs = require("fs");

const input = fs.readFileSync("/dev/stdin")
.toString()
.trim()
.split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.map(Number).sort((a, b) => a - b);

let minDiff = Infinity;
arr.map((X, idx) => {
  let st = idx + 1;
  let ed = N;
  let target = X + M;
  while (st < ed) {
    let mid = Math.floor((st + ed) / 2);
    if (arr[mid] >= target) {
      ed = mid;
    } else {
      st = mid + 1;
    }
  }
  if (st < N) {
    minDiff = Math.min(minDiff, arr[st] - X);
  }
});

console.log(minDiff);