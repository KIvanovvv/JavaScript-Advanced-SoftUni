function solve() {
  let taskInput = document.querySelector(`#task`);
  let descInput = document.querySelector(`#description`);
  let dueInput = document.querySelector(`#date`);
  const btnAdd = document.getElementById(`add`);
  const sectionOpen = document.querySelector(`.orange`);
  const sectionInProgress = document.querySelector(`.yellow`);
  const sectionComplete = document.querySelector(`.green`);

  btnAdd.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (taskInput.value && descInput.value && dueInput.value) {
      let newArticle = document.createElement(`article`);
      let resDiv = sectionOpen.parentElement.parentElement.children[1];
      let h3Name = document.createElement(`h3`);
      let pDescription = document.createElement(`p`);
      let pDate = document.createElement(`p`);
      let btnDiv = document.createElement(`div`);
      let btnStart = document.createElement(`button`);
      let btnDelete = document.createElement(`button`);

      h3Name.textContent = taskInput.value;
      pDescription.textContent = `Description: ${descInput.value}`;
      pDate.textContent = `Due Date: ${dueInput.value}`;
      btnDiv.className = `flex`;
      btnStart.className = `green`;
      btnStart.textContent = `Start`;
      btnDelete.className = `red`;
      btnDelete.textContent = `Delete`;

      newArticle.appendChild(h3Name);
      newArticle.appendChild(pDescription);
      newArticle.appendChild(pDate);
      btnDiv.appendChild(btnStart);
      btnDiv.appendChild(btnDelete);
      newArticle.appendChild(btnDiv);
      resDiv.appendChild(newArticle);

      btnStart.addEventListener(`click`, (e) => {
        let btnDeleteProgress = e.target.parentElement.children[0];
        let btnFinishProgress = e.target.parentElement.children[1];
        let resDiv = sectionInProgress.parentElement.parentElement.children[1];
        resDiv.appendChild(newArticle);
        btnFinishProgress.textContent = `Finish`;
        btnFinishProgress.className = `orange`;
        btnDeleteProgress.textContent = `Delete`;
        btnDeleteProgress.className = `red`;

        btnDeleteProgress.addEventListener(`click`, () => {
          btnDeleteProgress.parentElement.parentElement.remove();
        });

        btnFinishProgress.addEventListener(`click`, () => {
          let resDiv = sectionComplete.parentElement.parentElement.children[1];
          resDiv.appendChild(newArticle);
          btnDiv.remove();
        });
      });

      btnDelete.addEventListener(`click`, (e) => {
        e.target.parentElement.parentElement.remove();
      });
    }
  });
}
