function swap(firstPosition, secondPosition, arr) {
  let temp = arr[firstPosition];
  arr[firstPosition] = arr[secondPosition];
  arr[secondPosition] = temp;
}

function bubblySorting(arr) {
  let nmbSwaps = 0;
  for (let i = 0; i < arr.length; i++) {
    let nmbSwapsForRow = 0;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
        nmbSwaps++;
        nmbSwapsForRow++;
      }
    }
    if (nmbSwapsForRow === 0) {
      break;
    }
  }
  return [arr, nmbSwaps];
}
let arr = [4, 3, 1, 2];
let [array, numberSwaps] = bubblySorting(arr);
console.log(numberSwaps, array);