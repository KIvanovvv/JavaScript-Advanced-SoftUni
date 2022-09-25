function toggle() {
  const btn = document.getElementsByClassName(`button`)[0];

  const extraText = document.getElementById(`extra`);
  if (btn.innerText == `MORE`) {
    extraText.style.display = `block`;
    btn.innerText = `Less`;
  } else if (btn.innerText == `LESS`) {
    extraText.style.display = `none`;
    btn.innerText = `More`;
  }
  btn.innerText == `MORE`
    ? ((document.getElementById(`extra`).style.display = `block`),
      (btn.innerText = `Less`))
    : ((document.getElementById(`extra`).style.display = `none`),
      (btn.innerText = `More`));
}
