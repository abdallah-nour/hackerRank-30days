function main(number) {
  let nmbOfOnesBefore, nmbOfOnesAfter;
  nmbOfOnesBefore = maxNmbOfConsecutiveChar(number, "1");
  number = number.toString(2);
  nmbOfOnesAfter = maxNmbOfConsecutiveChar(number, "1");
  return nmbOfOnesAfter;
}

const maxNmbOfConsecutiveChar = (string, char) => {
  let maxNmbOfConsecutive = 0;
  let currentNmbOfConsecutive = 0;
  let lastValue = ('' + string).charAt(0);
  ('' + string).split('').map(value => {
    if (lastValue === value)
      (value === char) && currentNmbOfConsecutive++;
    else {
      maxNmbOfConsecutive = currentNmbOfConsecutive > maxNmbOfConsecutive ? currentNmbOfConsecutive : maxNmbOfConsecutive;
      currentNmbOfConsecutive = 0;
    }
  });
  maxNmbOfConsecutive = currentNmbOfConsecutive > maxNmbOfConsecutive ? currentNmbOfConsecutive : maxNmbOfConsecutive;
  return currentNmbOfConsecutive < maxNmbOfConsecutive ? maxNmbOfConsecutive : currentNmbOfConsecutive;
}

console.log(main(65535));
