function lockedProfile() {
  const btns = Array.from(document.querySelectorAll(`button`));

  for (let btn of btns) {
    btn.addEventListener(`click`, (e) => {
      let status =
        e.target.parentElement.querySelector(`input[value=lock]`).checked;

      let currentUser = e.target.parentElement.querySelector(`div`).id;
      if (!status) {
        e.target.parentElement.querySelector(
          `#${currentUser}`
        ).style.display = `block`;
        let currBtn = e.target.parentElement.querySelector(`button`);
        currBtn.textContent = `Hide it`;
        currBtn.addEventListener(`click`, () => {
          let currStatus =
            e.target.parentElement.querySelector(`input[value=lock]`).checked;
          if (!currStatus) {
            e.target.parentElement.querySelector(
              `#${currentUser}`
            ).style.display = `none`;
            currBtn.textContent = `Show more`;
          }
        });
      }
    });
  }
}
