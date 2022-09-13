function upperCase(str) {
  let buffer = ``;
  str = str
    .replace(/\W/g, ` `)
    .split(" ")
    .filter((el) => /\S/.test(el))
    .map((el) => el.toUpperCase())
    .forEach((el) => (buffer += `, ${el}`));

  console.log(buffer.slice(1));
}
upperCase(`'Hi, how are you?`);
