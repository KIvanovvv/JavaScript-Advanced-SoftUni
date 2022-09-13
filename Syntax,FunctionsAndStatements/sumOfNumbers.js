function sum(a, b) {
  let buff = 0;
  for (let i = Number(a); i >= 0; i--) {
    buff += i;
  }
  for (let i = Number(b); i >= 0; i--) {
    buff += i;
  }
  console.log(buff);
}
sum("-8", "20");
