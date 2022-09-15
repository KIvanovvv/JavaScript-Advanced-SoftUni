function lastKNumbers(n, k) {
  let res = [1];
  for (let i = 1; i < n; i++) {
    let arrK = res.slice(-k);
    if (arrK.length === 1) res.push(1);
    else {
      let buffer = arrK.reduce((a, b) => a + b);
      res.push(buffer);
    }
  }
  return res;
}
console.log(lastKNumbers(6, 3));
