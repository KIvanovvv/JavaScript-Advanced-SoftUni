function solve() {
  const userInput = document.querySelector(`#input`).value;
  const output = document.querySelector(`#output`);
  output.innerHTML = "";
  let inputArr = userInput.split(".").filter((el) => el.length > 0);

  for (let i = 0; i < inputArr.length; i += 3) {
    let currentP = [];
    for (let j = 0; j < 3; j++) {
      if (inputArr[i + j]) {
        currentP.push(inputArr[i + j]);
      }
    }
    let resText = currentP.join(". ") + ".";
    output.innerHTML += `<p>${resText}</p>`;
  }
}
