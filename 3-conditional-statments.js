function main(input) {
  let res;
  if (input % 2 === 1) {
    res = "Weird";
  } else if (2 <= input && input <= 5) {
    res = "Not Weird";
  } else if (6 <= input && input <= 20) {
    res = "Weird";
  } else if (input > 20) {
    res = "Not Weird";
  }
  console.log(res);
}

main(1);