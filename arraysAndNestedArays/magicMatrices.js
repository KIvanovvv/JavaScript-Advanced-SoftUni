function magicMatrices(matrix) {
  let result = [];
  matrix.forEach((mtr) => {
    result.push(mtr.reduce((a, b) => a + b));
  });
  return result[0] === result[1] && result[1] === result[2] ? true : false;
}
console.log(
  magicMatrices([
    [4, 5, 6],

    [6, 5, 4],

    [5, 5, 5],
  ])
);
console.log(`................`);
console.log(
  magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
  ])
);
console.log(
  magicMatrices([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
