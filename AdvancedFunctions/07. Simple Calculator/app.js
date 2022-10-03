function calculator() {
  // TODO: calculate.add()"  "calculate.subtract()
  let selector1;
  let selector2;
  let resultSelector;

  let command = {
    init: (select1, select2, resultSelect) => {
      selector1 = document.querySelector(select1);
      selector2 = document.querySelector(select2);
      resultSelector = document.querySelector(resultSelect);
    },
    add: () => {
      let firstNum = selector1.value;
      let secondNum = selector2.value;
      let sum = Number(firstNum) + Number(secondNum);
      resultSelector.value = sum;
    },
    subtract: () => {
      let firstNum = selector1.value;
      let secondNum = selector2.value;
      let sum = Number(firstNum) - Number(secondNum);
      resultSelector.value = sum;
    },
  };
  return command;
}

const calculate = calculator();

calculate.init("#num1", "#num2", "#result");
//calculate.add(5, 5);
//calculate.subtract(10, 5);
