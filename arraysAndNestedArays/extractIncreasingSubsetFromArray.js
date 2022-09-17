function extract(arr) {
  let result = [];
  let currentNum = arr[0];
  if (arr) {
    for (let el of arr) {
      if (currentNum <= el) {
        result.push(el);
        currentNum = el;
      }
    }
  }
  return result;
}
console.log(extract([20, 3, 26, 15, 6, 1]));
