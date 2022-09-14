function sameNumbers(num) {
  let total = 0;
  let isSame = true;
  let curentEl = String(num)[0];
  for (let el of String(num)) {
    if (curentEl !== el) {
      isSame = false;
    }
    total += Number(el);
  }
  console.log(isSame);
  console.log(total);
}
sameNumbers(2222222);
