function deleteByEmail() {
  const usersList = document.querySelectorAll(`#customers td:nth-child(2)`);
  const userInput = document.querySelector(`input`).value;

  for (let el of usersList) {
    if (el.textContent === userInput) {
      el.parentElement.remove();
      document.querySelector(`#result`).textContent = `Deleted.`;
      break;
    } else {
      document.querySelector(`#result`).textContent = `Not found.`;
    }
  }
}
