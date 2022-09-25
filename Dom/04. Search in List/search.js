function search() {
  let allTowns = Array.from(document.querySelectorAll(`ul li`));
  const searchText = document.querySelector(`#searchText`).value;
  const resultField = document.querySelector(`#result`);
  allTowns.forEach((el) => {
    el.style.textDecoration = ``;
    el.style.fontWeight = `normal`;
  });
  let counter = 0;
  allTowns.forEach((el) => {
    if (el.innerText.includes(searchText)) {
      counter++;
      el.style.textDecoration = `underline`;
      el.style.fontWeight = `bold`;
    }
  });
  resultField.textContent = `${counter} matches found`;
}
