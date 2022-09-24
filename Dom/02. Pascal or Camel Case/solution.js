function solve() {
  const textInput = document.querySelector(`#text`).value;
  const convention = document.querySelector(`#naming-convention`).value;
  const resultOutput = document.querySelector(`#result`);

  let res = "";
  let arrWords = textInput.split(" ");
  switch (convention) {
    case "Camel Case":
      arrWords.forEach((el, i) => {
        el = el.toLowerCase();
        if (i === 0) {
          res += el;
        } else {
          res += el[0].toUpperCase() + el.substring(1);
        }
      });
      break;
    case `Pascal Case`:
      arrWords.forEach((el) => {
        el = el.toLowerCase();
        res += el[0].toUpperCase() + el.substring(1);
      });
      break;
    default:
      res += `Error!`;
  }
  resultOutput.textContent = res;
}
