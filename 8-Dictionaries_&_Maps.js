function processData(input) {
  input = input.split('\n');
  let nmb = input.splice(0, 1);
  let data = {};
  // to store data in pairs
  for (let i = 0; i < nmb; i++) {
    let pair = input[i].split(' ');
    data[pair[0]] = pair[1];
  }
  // to console the required data
  for (let i = nmb; i < input.length; i++) {
    data[input[i]] ?
      console.log(`${input[i]}=${data[input[i]]}`) :
      console.log('Not found');
  }
}

let input = "3\n" + "sam 99912222\n" +
  "tom 11122222\n" +
  "harry 12299933\n" +
  "sam\n" +
  "edward\n" +
  "harry";

processData(input);