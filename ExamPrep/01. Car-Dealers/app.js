window.addEventListener("load", solve);

function solve() {
  const makeInput = document.querySelector(`#make`);
  const modelInput = document.querySelector(`#model`);
  const yearInput = document.querySelector(`#year`);
  const fuelTypeInput = document.querySelector(`#fuel`);
  const originalPriceInput = document.querySelector(`#original-cost`);
  const sellingPriceInput = document.querySelector(`#selling-price`);
  const btnPublish = document.querySelector(`#publish`);
  const tbody = document.querySelector(`#table-body`);
  const ulCarsList = document.querySelector(`#cars-list`);
  const profitMade = document.querySelector(`#profit`);

  btnPublish.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (
      makeInput.value === "" ||
      modelInput.value === "" ||
      yearInput.value === "" ||
      fuelTypeInput.value === "" ||
      originalPriceInput.value === "" ||
      sellingPriceInput.value === "" ||
      originalPriceInput.value > sellingPriceInput.value
    ) {
      return;
    }

    let tr = document.createElement(`tr`);
    tr.className = `row`;
    let tdMake = document.createElement(`td`);
    let tdModel = document.createElement(`td`);
    let tdYear = document.createElement(`td`);
    let tdFuel = document.createElement(`td`);
    let tdOrgPrice = document.createElement(`td`);
    let tdSellPrice = document.createElement(`td`);
    let tdBtns = document.createElement(`td`);
    let btnEdit = document.createElement(`button`);
    let btnSell = document.createElement(`button`);
    tdMake.textContent = makeInput.value;
    tdModel.textContent = modelInput.value;
    tdYear.textContent = yearInput.value;
    tdFuel.textContent = fuelTypeInput.value;
    tdOrgPrice.textContent = originalPriceInput.value;
    tdSellPrice.textContent = sellingPriceInput.value;
    btnEdit.className = `action-btn edit`;
    btnEdit.textContent = `Edit`;
    btnSell.className = `action-btn sell`;
    btnSell.textContent = `Sell`;
    tdBtns.appendChild(btnEdit);
    tdBtns.appendChild(btnSell);
    tr.appendChild(tdMake);
    tr.appendChild(tdModel);
    tr.appendChild(tdYear);
    tr.appendChild(tdFuel);
    tr.appendChild(tdOrgPrice);
    tr.appendChild(tdSellPrice);
    tr.appendChild(tdBtns);
    tbody.appendChild(tr);

    makeInput.value = "";
    modelInput.value = "";
    yearInput.value = "";
    fuelTypeInput.value = "";
    originalPriceInput.value = "";
    sellingPriceInput.value = "";

    btnEdit.addEventListener(`click`, (e) => {
      let allTds = Array.from(e.target.parentElement.parentElement.children);
      makeInput.value = allTds[0].textContent;
      modelInput.value = allTds[1].textContent;
      yearInput.value = allTds[2].textContent;
      fuelTypeInput.value = allTds[3].textContent;
      originalPriceInput.value = allTds[4].textContent;
      sellingPriceInput.value = allTds[5].textContent;
      e.target.parentElement.parentElement.remove();
    });

    btnSell.addEventListener(`click`, (e) => {
      let allTds = Array.from(e.target.parentElement.parentElement.children);
      let li = document.createElement(`li`);
      li.className = `each-list`;
      let span1 = document.createElement(`span`);
      let span2 = document.createElement(`span`);
      let span3 = document.createElement(`span`);
      span1.textContent = `${allTds[0].textContent} ${allTds[1].textContent}`;
      span2.textContent = `${allTds[2].textContent}`;
      span3.textContent = `${
        Number(allTds[5].textContent) - Number(allTds[4].textContent)
      }`;

      li.appendChild(span1);
      li.appendChild(span2);
      li.appendChild(span3);
      ulCarsList.appendChild(li);
      let curr = Number(profitMade.textContent);
      curr += Number(allTds[5].textContent) - Number(allTds[4].textContent);
      profitMade.textContent = curr.toFixed(2);
      e.target.parentElement.parentElement.remove();
    });
  });
}
