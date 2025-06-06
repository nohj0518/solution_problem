process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let star = Array.from(Array(b), ()=> Array(a).fill('*').join(''))
    console.log(star.join('\n'));
});