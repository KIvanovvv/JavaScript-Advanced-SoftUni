function sum(a, b) {
  if (typeof a !== `number`) {
    return NaN;
  }
  if (typeof b !== `number`) {
    return NaN;
  }
  let sum = a + b;
  return sum;
}

console.log(sum(`5`, 5));
module.exports = { sum };
