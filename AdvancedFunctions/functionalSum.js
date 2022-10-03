function add(a) {
  return function () {
    return a;
  };
}

console.log(add(1));
