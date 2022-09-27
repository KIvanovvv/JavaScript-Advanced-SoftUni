function attachGradientEvents() {
  const gradient = document.querySelector(`#gradient`);
  gradient.addEventListener(`mousemove`, (e) => {
    let position = e.offsetX;
    let gradientWidth = e.target.offsetWidth;
    let precentage = Math.floor((position / gradientWidth) * 100);

    document.querySelector(`#result`).textContent = `${precentage}%`;
  });
}
