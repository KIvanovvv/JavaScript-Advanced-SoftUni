window.addEventListener("load", solve);

function solve() {
  const titleInput = document.querySelector(`#post-title`);
  const categoryInput = document.querySelector(`#post-category`);
  const contentInput = document.querySelector(`#post-content`);
  const btnPublish = document.querySelector(`#publish-btn`);
  const ulReviewList = document.querySelector(`#review-list`);
  const ulPublishedList = document.querySelector(`#published-list`);
  const btnClear = document.querySelector(`#clear-btn`);

  btnPublish.addEventListener(`click`, () => {
    if (
      titleInput.value === `` ||
      categoryInput.value === `` ||
      contentInput.value === ``
    ) {
      return;
    }
    let li = document.createElement(`li`);
    li.className = `rpost`;
    let article = document.createElement(`article`);
    let h4 = document.createElement(`h4`);
    let p1 = document.createElement(`p`);
    let p2 = document.createElement(`p`);

    let btnEdit = document.createElement(`button`);
    btnEdit.textContent = `Edit`;
    btnEdit.className = `action-btn edit`;
    let btnApprove = document.createElement(`button`);
    btnApprove.textContent = `Approve`;
    btnApprove.className = `action-btn approve`;

    h4.textContent = titleInput.value;
    p1.textContent = `Category: `;
    p1.textContent += `${categoryInput.value}`;

    p2.textContent = `Content: `;
    p2.textContent += `${contentInput.value}`;
    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    li.appendChild(article);
    li.appendChild(btnApprove);
    li.appendChild(btnEdit);
    ulReviewList.appendChild(li);

    titleInput.value = ``;
    categoryInput.value = ``;
    contentInput.value = ``;

    btnEdit.addEventListener(`click`, (e) => {
      titleInput.value = e.target.parentElement.querySelector(`h4`).textContent;
      categoryInput.value =
        e.target.parentElement.querySelectorAll(`p`)[0].textContent;
      contentInput.value =
        e.target.parentElement.querySelectorAll(`p`)[1].textContent;
      e.target.parentElement.remove();
    });

    btnApprove.addEventListener(`click`, (e) => {
      ulPublishedList.appendChild(e.target.parentElement);
      ulPublishedList.querySelectorAll(`button`)[0].remove();
      ulPublishedList.querySelectorAll(`button`)[0].remove();
    });

    btnClear.addEventListener(`click`, (e) => {
      let liArr = Array.from(e.target.parentElement.querySelectorAll(`li`));
      liArr.forEach((li) => li.remove());
    });
  });
}
