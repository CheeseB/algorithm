// input
const input: string = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim();

// variable
const n: number = Number(input);
let dp: number[] = [0, 0, 1, 1];

// solution
for (let i = 4; i <= n; i++) {
  if (i % 3 === 0) dp[i] = Math.min(dp[i - 1]!, dp[i / 3]!) + 1;
  else if (i % 2 === 0) dp[i] = Math.min(dp[i - 1]!, dp[i / 2]!) + 1;
  else dp[i] = dp[i - 1]! + 1;
}

// output
console.log(dp[n]);
