function stringConvert(str1, str2, str3) {
  let arr = [];
  arr.push(str1);
  arr.push(str2);
  arr.push(str3);
  const length = arr.join("").length;
  const avgL = Math.floor(length / 3);
  console.log(length);
  console.log(avgL);
}
stringConvert("chocolate", "ice cream", "cake");
