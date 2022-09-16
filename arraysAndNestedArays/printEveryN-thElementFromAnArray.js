function printNthEl(arr, num) {
  return arr
    .map((el, i) => {
      if (i % num === 0) {
        return el;
      }
    })
    .filter((el) => el !== undefined);
}
console.log(printNthEl(["5", "20", "31", "4", "20"], 6));
