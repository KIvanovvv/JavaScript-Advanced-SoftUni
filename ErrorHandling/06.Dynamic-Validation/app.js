function validate() {
  let input = document.querySelector(`#email`);
  let emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
  input.addEventListener(`change`, onChange);

  function onChange(e) {
    if (e.target.value.match(emailPattern)) {
      e.target.classList.remove(`error`);
    } else {
      e.target.classList.add(`error`);
    }
  }
}
