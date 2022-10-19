window.addEventListener("load", solve);

function solve() {
  const productTypeInput = document.querySelector(`#type-product`);
  const descriptionInput = document.querySelector(`#description`);
  const clientNameInput = document.querySelector(`#client-name`);
  const clientPhoneInput = document.querySelector(`#client-phone`);
  const btnSend = document.querySelector(`#right`).querySelector(`button`);

  const recivedOrders = document.querySelector(`#received-orders`);
  const completedOrders = document.querySelector(`#completed-orders`);
  const btnClear = document
    .querySelector(`#completed-orders`)
    .querySelector(`button`);

  btnSend.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (
      productTypeInput.value === `` ||
      descriptionInput.value === `` ||
      clientNameInput.value === `` ||
      clientPhoneInput.value === ``
    ) {
      return;
    }

    let div = document.createElement(`div`);
    div.setAttribute(`class`, `container`);

    let h2ProductType = document.createElement(`h2`);
    h2ProductType.textContent = `Product type for repair: ${productTypeInput.value}`;

    let h3ClientInfo = document.createElement(`h3`);
    h3ClientInfo.textContent = `Client information: ${clientNameInput.value}, ${clientPhoneInput.value}`;

    let h4ProblemDescription = document.createElement(`h4`);
    h4ProblemDescription.textContent = `Description of the problem: ${descriptionInput.value}`;

    let btnStart = document.createElement(`button`);
    btnStart.textContent = `Start repair`;
    btnStart.setAttribute(`class`, `start-btn`);

    let btnFinish = document.createElement(`button`);
    btnFinish.textContent = `Finish repair`;
    btnFinish.setAttribute(`class`, `finish-btn`);
    btnFinish.disabled = true;

    div.appendChild(h2ProductType);
    div.appendChild(h3ClientInfo);
    div.appendChild(h4ProblemDescription);
    div.appendChild(btnStart);
    div.appendChild(btnFinish);

    recivedOrders.appendChild(div);

    productTypeInput.value = ``;
    descriptionInput.value = ``;
    clientNameInput.value = ``;
    clientPhoneInput.value = ``;

    btnStart.addEventListener(`click`, () => {
      btnFinish.disabled = false;
      btnStart.disabled = true;
    });

    btnFinish.addEventListener(`click`, (e) => {
      completedOrders.appendChild(e.target.parentElement);
      let arrBtns = Array.from(
        e.target.parentElement.querySelectorAll(`button`)
      );
      for (let el of arrBtns) {
        el.remove();
      }
    });

    btnClear.addEventListener(`click`, (e) => {
      let arrDivs = Array.from(e.target.parentElement.querySelectorAll(`div`));
      for (let el of arrDivs) {
        el.remove();
      }
    });
  });
}
