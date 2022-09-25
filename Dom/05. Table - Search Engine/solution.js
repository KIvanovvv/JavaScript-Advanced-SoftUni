function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const allInfo = Array.from(
      document.querySelectorAll(`.container tbody tr`)
    );
    const userInput = document.querySelector(`#searchField`).value;
    allInfo.forEach((el) => {
      el.classList.remove(`select`);
    });

    allInfo.forEach((el) => {
      el.innerText.includes(userInput) && el.classList.add(`select`);
    });
    //  allInfo.forEach((el) => {
    //    if (el.innerText.includes(userInput)) {
    //      el.className = `select`;
    //    }
    //  });
  }
}
