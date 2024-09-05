const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [M, N, H] = input
    .shift()
    .split(" ")
    .map((x) => parseInt(x));

  const boxes = [];
  const que = [];
  input = input.map((x) => x.split(" "));

  for (let i = 0; i < H; i++) {
    boxes.push(input.splice(0, N));
  }

  for (let h = 0; h < H; h++) {
    for (let n = 0; n < N; n++) {
      for (let m = 0; m < M; m++) {
        if (boxes[h][n][m] == 1) {
          que.push([h, n, m, 0]);
        }
      }
    }
  }

  /**
   * BFS
   */

  let day = 0;
  let node;
  let idx = 0;
  while (que.length > idx) {
    node = que[idx++];
    bfs(node);
  }
  day = node ? node[node.length - 1] : -1;

  let check = true;
  for (box of boxes) {
    for (tomatos of box) {
      if (tomatos.includes("0")) {
        check = false;
        break;
      }
    }
    if (!check) break;
  }
  check ? console.log(day) : console.log(-1);

  function bfs(p) {
    const z = p[0];
    const x = p[1];
    const y = p[2];
    const day = p[3];
    const dx = [-1, 1, 0, 0, 0, 0];
    const dy = [0, 0, -1, 1, 0, 0];
    const dz = [0, 0, 0, 0, -1, 1];
    for (let i = 0; i < 6; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      const nz = z + dz[i];
      if (nz < 0 || nx < 0 || ny < 0 || nz >= H || nx >= N || ny >= M) continue;
      if (boxes[nz][nx][ny] == -1) continue;
      if (boxes[nz][nx][ny] > 0) continue;
      boxes[nz][nx][ny] = day + 1;
      que.push([nz, nx, ny, day + 1]);
    }
  }

  process.exit();
});
