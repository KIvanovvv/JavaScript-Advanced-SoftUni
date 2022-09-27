function addItem() {
  const ul = document.querySelector(`ul`);
  const li = document.createElement(`li`);
  const userInput = document.querySelector(`#newItemText`).value;

  li.textContent = userInput;
  ul.appendChild(li);
}
