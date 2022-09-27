function attachGradientEvents() {
  const gradient = document.querySelector(`#gradient`);
  let res = document.querySelector(`#result`);
  gradient.addEventListener(`mousemove`, (e) => {
    let position = e.offsetX;
    let gradientWidth = e.target.clientWidth - 1;
    let precentage = Math.floor((position / gradientWidth) * 100);

    res.textContent = precentage + "%";
  });
  gradient.addEventListener(`mouseout`, () => {
    res.textContent = ``;
  });
}
