function subtract() {
  const firstNum = document.querySelector(`#firstNumber`).value;
  const secondNum = document.querySelector(`#secondNumber`).value;
  const result = document.querySelector(`#result`);
  result.innerText = Number(firstNum) - Number(secondNum);
}
