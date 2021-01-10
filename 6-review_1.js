function processData() {
  let input = "hacker";
  let evenChars = [];
  let oddChars = [];
  input.split('').map((value, index) => {
    index % 2 === 0
      ? evenChars.push(value)
      : oddChars.push(value);
  })
  return evenChars.join('') + " " + oddChars.join("");
}

console.log(processData());