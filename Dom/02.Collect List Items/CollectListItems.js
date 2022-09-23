function extractText() {
  const items = document.querySelectorAll(`li`);

  const textArea = document.getElementById(`result`);
  for (let el of items) {
    textArea.textContent += `${el.innerText} \n`;
  }
}
