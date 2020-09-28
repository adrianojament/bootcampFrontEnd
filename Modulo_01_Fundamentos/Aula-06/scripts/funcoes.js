// console.log(helloWord());
// console.log(sum(5, 6));
// console.log(compareNumbers(4, 1));
// console.log(compareNumbers(4, 4));
// console.log(compareNumbers(1, 4));
console.log(summation(1, 10));
console.log(summation(1, 100));
console.log(summation(1, 1000));

function helloWord() {
  return 'Hello mundo';
}

function sum(a, b) {
  return a + b;
}

// -1 = a < b
// 0 = a = b
// 1 = a > b
function compareNumbers(a, b) {
  //   return a > b ? 1 : a < b ? -1 : 0;
  return a - b;
}

function summation(from, upTo) {
  var sum = 0;
  for (var index = from; index <= upTo; index++) {
    sum += index;
  }
  return sum;
}
