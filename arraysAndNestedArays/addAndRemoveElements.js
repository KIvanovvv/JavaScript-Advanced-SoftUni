function addOrRemove(command) {
  let res = [];
  command.forEach((el, i) => {
    el === `add` ? res.push(i + 1) : res.pop();
  });
  return res.length !== 0 ? res.join("\n") : `Empty`;
}
console.log(addOrRemove(["add", "add", "add", "add"]));
console.log(`.............`);
addOrRemove(["add", "add", "remove", "add", "add"]);
console.log(`...............`);
console.log(addOrRemove([]));
