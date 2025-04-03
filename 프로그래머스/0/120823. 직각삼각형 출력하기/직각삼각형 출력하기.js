const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const n = Number(input[0]);
    let result = '';
    for(let i=1; i<=n; i++){
        let array = [...new Array(i).fill('*')].join('') + '\n'
        result += array
    }
    console.log(result);
});