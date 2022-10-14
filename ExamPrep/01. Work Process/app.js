function solve() {
  const fNameInput = document.querySelector(`#fname`);
  const lNameInput = document.querySelector(`#lname`);
  const emailInput = document.querySelector(`#email`);
  const dateInput = document.querySelector(`#birth`);
  const positionInput = document.querySelector(`#position`);
  const salaryInput = document.querySelector(`#salary`);
  const btnHireWorker = document.querySelector(`#add-worker`);
  const tbody = document.querySelector(`#tbody`);
  const budget = document.querySelector(`#sum`);
  //   let startingBudget = 0;
  //   budget.textContent = startingBudget.toFixed(2);

  btnHireWorker.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (
      fNameInput.value === `` ||
      lNameInput.value === `` ||
      emailInput.value === `` ||
      dateInput.value === `` ||
      positionInput.value === `` ||
      salaryInput.value === ``
    ) {
      return;
    }
    let tr = document.createElement(`tr`);
    let tdFirstName = document.createElement(`td`);
    tdFirstName.textContent = fNameInput.value;
    let tdLastName = document.createElement(`td`);
    tdLastName.textContent = lNameInput.value;
    let tdEmail = document.createElement(`td`);
    tdEmail.textContent = emailInput.value;
    let tdDate = document.createElement(`td`);
    tdDate.textContent = dateInput.value;
    let tdPosition = document.createElement(`td`);
    tdPosition.textContent = positionInput.value;
    let tdSalary = document.createElement(`td`);
    tdSalary.textContent = salaryInput.value;
    let tdBtns = document.createElement(`td`);
    let btnFired = document.createElement(`button`);
    btnFired.setAttribute(`class`, `fired`);
    btnFired.textContent = `Fired`;
    let btnEdit = document.createElement(`button`);
    btnEdit.setAttribute(`class`, `edit`);
    btnEdit.textContent = `Edit`;
    tdBtns.appendChild(btnFired);
    tdBtns.appendChild(btnEdit);

    tr.appendChild(tdFirstName);
    tr.appendChild(tdLastName);
    tr.appendChild(tdEmail);
    tr.appendChild(tdDate);
    tr.appendChild(tdPosition);
    tr.appendChild(tdSalary);
    tr.appendChild(tdBtns);
    tbody.appendChild(tr);

    budget.textContent = (
      Number(salaryInput.value) + Number(budget.textContent)
    ).toFixed(2);

    fNameInput.value = "";
    lNameInput.value = "";
    emailInput.value = "";
    dateInput.value = "";
    positionInput.value = "";
    salaryInput.value = "";

    btnEdit.addEventListener(`click`, (e) => {
      let arr = Array.from(e.target.parentElement.parentElement.children);

      fNameInput.value = arr[0].textContent;
      lNameInput.value = arr[1].textContent;
      emailInput.value = arr[2].textContent;
      dateInput.value = arr[3].textContent;
      positionInput.value = arr[4].textContent;
      salaryInput.value = arr[5].textContent;

      budget.textContent = Number(
        budget.textContent - salaryInput.value
      ).toFixed(2);
      e.target.parentElement.parentElement.remove();
    });

    btnFired.addEventListener(`click`, (e) => {
      let arr = Array.from(e.target.parentElement.parentElement.children);

      budget.textContent = Number(
        budget.textContent - arr[5].textContent
      ).toFixed(2);
      e.target.parentElement.parentElement.remove();
    });
  });
}
solve();
