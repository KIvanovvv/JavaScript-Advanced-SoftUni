function attachEventsListeners() {
  const inputDays = document.querySelector(`#days`);
  const inputHours = document.querySelector(`#hours`);
  const inputMinutes = document.querySelector(`#minutes`);
  const inputSeconds = document.querySelector(`#seconds`);
  let btns = Array.from(document.querySelectorAll(`input[type=button]`));

  for (let btn of btns) {
    btn.addEventListener(`click`, (e) => {
      let currValue = Number(e.target.parentElement.children[1].value);
      let currBtn = e.target.parentElement.children[2].id;
      switch (currBtn) {
        case `daysBtn`:
          inputHours.value = currValue * 24;
          inputMinutes.value = currValue * 24 * 60;
          inputSeconds.value = currValue * 24 * 60 * 60;
          break;
        case `hoursBtn`:
          inputDays.value = currValue / 24;
          inputMinutes.value = currValue * 60;
          inputSeconds.value = currValue * 60 * 60;
          break;
        case `minutesBtn`:
          inputDays.value = currValue / 24 / 60;
          inputHours.value = currValue / 60;
          inputSeconds.value = currValue * 60;

          break;
        case `secondsBtn`:
          inputDays.value = currValue / 24 / 60 / 60;
          inputHours.value = currValue / 60 / 60;
          inputMinutes.value = currValue / 60;
          break;
      }
    });
  }
}
