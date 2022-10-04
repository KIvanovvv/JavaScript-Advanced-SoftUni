function add(a) {
  let innerA = a;
  let total = 0;
  (function sum(innerA) {
    total += innerA;
  })(innerA);
  return total;
}
console.log(add(2)(2));
