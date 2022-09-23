function sumTable() {
  const rows = document.querySelectorAll(`table tr`);
  let sum = 0;
  for (let i = 1; i < rows.length - 1; i++) {
    let columns = rows[i].children;

    sum += Number(columns[1].innerText);
  }
  const total = document.getElementById(`sum`);
  total.innerText = sum;
}
