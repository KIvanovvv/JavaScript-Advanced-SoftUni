function solve() {
  const nameInput = document.querySelector(`#recipientName`);
  const titleInput = document.querySelector(`#title`);
  const messageInput = document.querySelector(`#message`);
  const btnAdd = document.querySelector(`#add`);
  const btnReset = document.querySelector(`#reset`);
  const ulList = document.querySelector(`#list`);
  const ulSent = document.querySelector(`.sent-list`);
  const ulDeleted = document.querySelector(`.delete-list`);

  btnReset.addEventListener(`click`, (e) => {
    e.preventDefault();
    nameInput.value = ``;
    titleInput.value = ``;
    messageInput.value = ``;
  });

  btnAdd.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (
      nameInput.value === `` ||
      titleInput.value === `` ||
      messageInput.value === ``
    ) {
      return;
    }
    let li = document.createElement(`li`);
    let h4Title = document.createElement(`h4`);
    h4Title.textContent = `Title: ${titleInput.value}`;
    let h4Recipient = document.createElement(`h4`);
    h4Recipient.textContent = `Recipient Name: ${nameInput.value}`;
    let spanMsg = document.createElement(`span`);
    spanMsg.textContent = `${messageInput.value}`;
    let divBtns = document.createElement(`div`);
    divBtns.id = `list-action`;
    let btnSend = document.createElement(`button`);
    btnSend.id = `send`;
    btnSend.textContent = `Send`;
    let btnDelete = document.createElement(`button`);
    btnDelete.id = `delete`;
    btnDelete.textContent = `Delete`;

    li.appendChild(h4Title);
    li.appendChild(h4Recipient);
    li.appendChild(spanMsg);
    divBtns.appendChild(btnSend);
    divBtns.appendChild(btnDelete);
    li.appendChild(divBtns);
    ulList.appendChild(li);

    nameInput.value = ``;
    titleInput.value = ``;
    messageInput.value = ``;

    btnDelete.addEventListener(`click`, (e) => {
      let li = document.createElement(`li`);
      let span1 = document.createElement(`span`);
      span1.textContent = `To: ${e.target.parentElement.parentElement
        .querySelectorAll(`h4`)[1]
        .textContent.slice(15)} `;
      let span2 = document.createElement(`span`);
      span2.textContent = `Title: ${e.target.parentElement.parentElement
        .querySelectorAll(`h4`)[0]
        .textContent.slice(6)}`;
      li.appendChild(span1);
      li.appendChild(span2);
      ulDeleted.appendChild(li);
      e.target.parentElement.parentElement.remove();
    });

    btnSend.addEventListener(`click`, (e) => {
      let li = document.createElement(`li`);
      let span1 = document.createElement(`span`);
      span1.textContent = `To: ${e.target.parentElement.parentElement
        .querySelectorAll(`h4`)[1]
        .textContent.slice(15)} `;
      let span2 = document.createElement(`span`);
      span2.textContent = `Title: ${e.target.parentElement.parentElement
        .querySelectorAll(`h4`)[0]
        .textContent.slice(6)}`;
      let divBtn = document.createElement(`div`);
      divBtn.className = `btn`;
      let btnDelete = document.createElement(`button`);
      btnDelete.className = `delete`;
      btnDelete.textContent = `Delete`;
      divBtn.appendChild(btnDelete);
      li.appendChild(span1);
      li.appendChild(span2);
      li.appendChild(divBtn);
      ulSent.appendChild(li);
      e.target.parentElement.parentElement.remove();
      btnDelete.addEventListener(`click`, (e) => {
        ulDeleted.appendChild(e.target.parentElement.parentElement);
        ulDeleted.querySelector(`div`).remove();
      });
    });
  });
}
solve();
