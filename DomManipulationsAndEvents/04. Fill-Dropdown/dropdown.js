function addItem() {
  let textInput = document.querySelector(`#newItemText`);
  let valueInput = document.querySelector(`#newItemValue`);
  const menu = document.querySelector(`#menu`);

  let optionEl = document.createElement(`option`);
  optionEl.text = textInput.value;
  optionEl.value = valueInput.value;
  menu.appendChild(optionEl);
  textInput.value = ``;
  valueInput.value = ``;
}
