function previousDay(year, month, date) {
  let dateStruc = `${year}/${month}/${date}`;
  let curentDate = new Date(dateStruc);
  curentDate.setDate(curentDate.getDate() - 1);
  return `${year}-${curentDate.getMonth() + 1}-${curentDate.getDate()}`;
}
console.log(previousDay(2016, 10, 1));
