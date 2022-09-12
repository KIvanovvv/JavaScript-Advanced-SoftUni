function operations(a, b, opr) {
  opr === `+` && console.log(a + b);
  opr === `-` && console.log(a - b);
  opr === `*` && console.log(a * b);
  opr === `/` && console.log(a / b);
  opr === `%` && console.log(a % b);
  opr === `**` && console.log(a ** b);
}
operations(5, 6, "+");
operations(3, 5.5, "*");
