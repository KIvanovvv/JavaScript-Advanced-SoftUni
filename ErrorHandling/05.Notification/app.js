function notify(message) {
  const resultDiv = document.querySelector(`#notification`);
  resultDiv.textContent = message;
  resultDiv.style.display = `block`;
  console.log(resultDiv);
  resultDiv.addEventListener(`click`, () => {
    resultDiv.style.display = `none`;
  });
}
