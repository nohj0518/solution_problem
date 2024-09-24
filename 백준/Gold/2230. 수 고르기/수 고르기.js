const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n, m;
let arr = [];

rl.on('line', (input) => {
  if (!n) {
    // First input: n (size of array), m (minimum difference)
    [n, m] = input.split(' ').map(Number);
  } else {
    // Subsequent input: array elements
    arr.push(Number(input));
    if (arr.length === n) {
      rl.close();
    }
  }
});

rl.on('close', () => {
  // Sort the array first
  arr.sort((a, b) => a - b);

  let answer = Infinity;

  for (let i = 0; i < n; i++) {
    let target = arr[i] + m;
    let low = i + 1, high = n;

    // Binary search for the lower bound
    while (low < high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] >= target) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }

    if (low < n) {
      answer = Math.min(answer, arr[low] - arr[i]);
    }
  }

  console.log(answer);
});
