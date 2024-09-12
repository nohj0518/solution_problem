const fs = require("fs");

const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

const target = +input.shift();
	
  let end = 1;
  let sum = 1;
  let count = 0;
 
  for (let start = 1; start <= target; start++) {
    while (sum < target && end < target) {
      end += 1;
      sum += end;
    }
 
    if (sum === target) {
      count += 1;
    }
 
    sum -= start;
  }
  console.log(count);