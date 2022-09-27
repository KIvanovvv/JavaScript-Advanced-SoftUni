function addItem() {
  const userInput = document.querySelector(`#newItemText`).value;

  const ul = document.querySelector(`#items`);
  const li = document.createElement(`li`);
  const a = document.createElement(`a`);

  a.setAttribute(`href`, "#");
  a.textContent = `[Delete]`;
  li.textContent = userInput;
  li.appendChild(a);
  ul.appendChild(li);

  a.addEventListener(`click`, (e) => {
    e.target.parentElement.remove();
  });
}
