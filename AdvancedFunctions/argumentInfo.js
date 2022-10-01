function argumentInfo(...arr) {
  let obj = {};
  for (let el of arr) {
    let type = typeof el;
    if (!obj.hasOwnProperty(type)) {
      console.log(`${type}: ${el}`);
      obj[type] = 1;
    } else {
      console.log(`${type}: ${el}`);
      obj[type] += 1;
    }
  }
  let buff = "";
  for (let [k, v] of Object.entries(obj)) {
    buff += `${k} = ${v}\n`;
  }
  console.log(buff);
}
argumentInfo({ name: "bob" }, 3.333, 9.999);
