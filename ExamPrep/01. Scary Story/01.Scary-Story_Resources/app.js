window.addEventListener("load", solve);

function solve() {
  const firstNameInput = document.querySelector(`#first-name`);
  const lastNameInput = document.querySelector(`#last-name`);
  const ageInput = document.querySelector(`#age`);
  const storyTitleInput = document.querySelector(`#story-title`);
  const genreInput = document.querySelector(`#genre`);
  const storyInput = document.querySelector(`#story`);
  const btnPublish = document.querySelector(`#form-btn`);

  const ulPreviewList = document.querySelector(`#preview-list`);
  const mainDiv = document.querySelector(`#main`);

  btnPublish.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (
      firstNameInput.value === `` ||
      lastNameInput.value === `` ||
      ageInput.value === `` ||
      storyTitleInput.value === `` ||
      genreInput.value === `` ||
      storyInput.value === ``
    ) {
      return;
    }
    let li = document.createElement(`li`);
    li.setAttribute(`class`, `story-info`);
    let article = document.createElement(`article`);
    let h4Name = document.createElement(`h4`);
    h4Name.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;

    let pAge = document.createElement(`p`);
    pAge.textContent = `Age: ${ageInput.value}`;

    let pTitle = document.createElement(`p`);
    pTitle.textContent = `Title: ${storyTitleInput.value}`;

    let pGenre = document.createElement(`p`);
    pGenre.textContent = `Genre: ${genreInput.value}`;

    let pStory = document.createElement(`p`);
    pStory.textContent = storyInput.value;

    let btnSave = document.createElement(`button`);
    btnSave.textContent = `Save Story`;
    btnSave.setAttribute(`class`, `save-btn`);

    let btnEdit = document.createElement(`button`);
    btnEdit.textContent = `Edit Story`;
    btnEdit.setAttribute(`class`, `edit-btn`);

    let btnDelete = document.createElement(`button`);
    btnDelete.textContent = `Delete Story`;
    btnDelete.setAttribute(`class`, `delete-btn`);

    article.appendChild(h4Name);
    article.appendChild(pAge);
    article.appendChild(pTitle);
    article.appendChild(pGenre);
    article.appendChild(pStory);

    li.appendChild(article);
    li.appendChild(btnSave);
    li.appendChild(btnEdit);
    li.appendChild(btnDelete);

    ulPreviewList.appendChild(li);

    firstNameInput.value = ``;
    lastNameInput.value = ``;
    ageInput.value = ``;
    storyTitleInput.value = ``;
    genreInput.value = ``;
    storyInput.value = ``;
    btnPublish.disabled = true;

    btnEdit.addEventListener(`click`, (e) => {
      let names = e.target.parentElement
        .querySelector(`h4`)
        .textContent.slice(6)
        .split(" ");

      firstNameInput.value = names[0];
      lastNameInput.value = names[1];

      inputsArr = Array.from(e.target.parentElement.querySelectorAll(`p`));
      ageInput.value = inputsArr[0].textContent.slice(5);
      storyTitleInput.value = inputsArr[1].textContent.slice(7);
      genreInput.value = inputsArr[2].textContent.slice(7);
      storyInput.value = inputsArr[3].textContent;
      btnPublish.disabled = false;
      e.target.parentElement.remove();
    });

    btnSave.addEventListener(`click`, (e) => {
      let h1FinalMsg = document.createElement(`h1`);
      h1FinalMsg.textContent = "Your scary story is saved!";
      let allContent = Array.from(mainDiv.children);
      for (let el of allContent) {
        el.remove();
      }
      mainDiv.appendChild(h1FinalMsg);
    });

    btnDelete.addEventListener(`click`, (e) => {
      e.target.parentElement.remove();
      btnPublish.disabled = false;
    });
  });
}
