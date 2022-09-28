function create(words) {
  const resDiv = document.querySelector(`#content`);

  console.log(resDiv);
  for (let word of words) {
    let p = document.createElement(`p`);
    let div = document.createElement(`div`);

    p.textContent = word;
    p.style.display = `none`;
    div.appendChild(p);
    resDiv.appendChild(div);
  }
  resDiv.addEventListener(`click`, (e) => {
    e.target.children[0].style.display = `block`;
  });
}
