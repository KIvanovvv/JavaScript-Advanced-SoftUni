function solve() {
  const input = document.querySelector(`#exercise textarea`);
  const btnGenerate = document.querySelector(`#exercise button`);
  let table = document.querySelector(`table tbody`);
  const btnBuy = document.querySelectorAll(`#container button`)[1];
  let textareaBuy = document.querySelectorAll(`#container textarea`)[1];

  btnGenerate.addEventListener(`click`, () => {
    let inputArr = JSON.parse(input.value);
    for (let item of inputArr) {
      table.innerHTML += ` <tr><td><img src="${item.img}"></td><td><p>${item.name}</p></td><td><p>${item.price}</p></td><td><p>${item.decFactor}</p></td><td><input type="checkbox" disabled /></td</tr>`;
    }
    let allItems = Array.from(table.children);
    for (let item of allItems) {
      item.querySelector(`input`).removeAttribute(`disabled`);
    }
  });
  btnBuy.addEventListener(`click`, () => {
    let allItems = Array.from(table.children);
    let selectedItems = [];
    let totaSum = 0;
    let decoration = [];
    let resItems = `Bought furniture: `;

    for (let item of allItems) {
      if (item.querySelector(`td input`).checked) {
        let name = item.querySelectorAll(`td p`)[0].textContent;
        let price = item.querySelectorAll(`td p`)[1].textContent;
        let decFactor = item.querySelectorAll(`td p`)[2].textContent;

        selectedItems.push(name);
        totaSum += Number(price);
        decoration.push(Number(decFactor));
      }
    }
    resItems += selectedItems.join(", ");
    let factor = decoration.reduce((a, b) => a + b) / decoration.length;

    textareaBuy.value = resItems;
    textareaBuy.value += `\nTotal price: ${totaSum.toFixed(2)}`;
    textareaBuy.value += `\nAverage decoration factor: ${factor}`;
  });
}
