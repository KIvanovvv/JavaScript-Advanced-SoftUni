function rotate(arr, times) {
  for (let i = 0; i < times; i++) {
    let temp = arr.pop();
    arr.unshift(temp);
  }
  return arr.join(" ");
}
console.log(rotate(["1", "2", "3", "4"], 2));
console.log(rotate(["Banana", "Orange", "Coconut", "Apple"], 15));
