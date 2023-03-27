// input
const input: string = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim();

// variable
const n: number = Number(input);
const dp: number[] = [0, 9];

// solution

// output
console.log(dp[n]);

`
n=1

1 2 3 4 5 6 7 8 9

->9
------------------------------
n=2

10 (0)
12 23 34 45 56 67 78 89 (1)
21 32 43 ...         98 (1.rev)

-> (8 * 2) + 1 = 17
-------------------------------
n=3

101 210 (0)
121 232 343 454 565 676 787 898 (1)
212 323 434 545 656 767 878 989 (1.rev)
123 234 345 456 567 678 789 (2)
321 432 543 ...         987 (2.rev)

-> (8 * 2) + (7 * 2) + 2 = 32
-------------------------------
n=4

1010 1012 1210 2101 3210 (0)
1212 2323 3434 4545 5656 6767 7878 8989 (1)
2121 3232 4343 ...                 9898 (1.rev)
1232 2343 3454 4565 5676 6787 7898 (2)
2123 3234 4345 5456 6567 7678 8789 (2)
2321 3432 ...                 8987 (2.rev)
3212 4323 ...                 9878 (2.rev)
1234 2345 3456 4567 5678 6789 (3)
4321 5432 ...            9876 (3.rev)

-> (8 * 2) + (7 * 2) + (7 * 2) + (6 * 2) + 5 = ?
`;