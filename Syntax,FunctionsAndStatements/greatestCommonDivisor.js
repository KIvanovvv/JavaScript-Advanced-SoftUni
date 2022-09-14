function GCD(x, y) {
  while (y) {
    let temp = y;
    y = x % y;
    x = temp;
  }
  console.log(x);
}
GCD(15, 5);
GCD(2154, 458);
