// when input is two dimension array => [[],[]...].
function main(arr) {
  let maxSum = arr[0][0] + arr[0][1] + arr[0][2] + arr[1][1] + arr[2][0] + arr[2][1] + arr[2][2];

  for (let i = 0; i < arr[0].length - 2; i++) {
    for (let j = 0; j < arr.length - 2; j++) {
      let currentSum = arr[j].slice(i, i + 3).join('+') + "+" + arr[j + 1][i] + "+" + arr[j + 2].slice(i, i + 3).join('+');
      if (eval(currentSum) > maxSum) maxSum = eval(currentSum);
    }
  }
  return maxSum;
}
// let currentSum = arr[j][i] + arr[0][i + 1] + arr[0][i + 2] + arr[1][i + 1] + arr[2][i] + arr[2][i + 1] + arr[2][i + 2];
// if (currentSum > maxSum) maxSum = currentSum;
let input = [
  [1, 1, 1, 1, 1, 1],
  [2, 5, 6, 4, 3, 2],
  [3, 3, 3, 3, 3, 3],
  [1, 1, 1, 1, 1, 1],
  [2, 5, 6, 4, 3, 2],
  [3, 3, 3, 3, 3, 3]
];

console.log(main(input));

// when input is one dimension => ['','']
function main2(input) {
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    let row = input[i].split(' ').map(value => +value);
    arr.push(row);
  }
  let maxSum = arr[0][0] + arr[0][1] + arr[0][2] + arr[1][1] + arr[2][0] + arr[2][1] + arr[2][2];

  for (let i = 0; i < arr[0].length - 2; i++) {
    for (let j = 0; j < arr.length - 2; j++) {
      let currentSum = arr[j].slice(i, i + 3).join('+') + "+" + arr[j + 1][i] + "+" + arr[j + 2].slice(i, i + 3).join('+');
      if (eval(currentSum) > maxSum) maxSum = eval(currentSum);
    }
  }
  return maxSum;
}
let input2 =
  ['1 1 1 1 1 1',
    '2 5 6 4 3 2',
    '3 3 3 3 3 3',
    '1 1 1 1 1 1',
    '2 5 6 4 3 2',
    '3 3 3 3 3 3'
  ];

console.log(main2(input2));
