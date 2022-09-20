function composeObj(arr) {
  let obj = {};
  arr.forEach((el, i, array) => {
    if (i % 2 === 0) obj[el] = Number(array[i + 1]);
  });
  console.log(obj);
}
composeObj(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
