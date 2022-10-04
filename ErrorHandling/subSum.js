function sum(arr, stratIndex, endIndex) {
  if (!Array.isArray(arr)) {
    return NaN;
  }
  if (!arr.every((el) => typeof el === `number`)) {
    return NaN;
  }
  let total = 0;
  if (stratIndex < 0) stratIndex = 0;
  if (endIndex > arr.length - 1) endIndex = arr.length - 1;
  let resArr = arr.slice(stratIndex, endIndex + 1);
  for (let el of resArr) {
    total += Number(el);
  }
  return total;
}
console.log(sum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(sum([], 1, 2));
console.log(sum("text", 0, 2));
