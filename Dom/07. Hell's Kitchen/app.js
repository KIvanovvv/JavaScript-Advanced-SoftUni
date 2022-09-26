function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  let result = [];
  function onClick() {
    let userInput = document.querySelector(`#inputs textarea`).value;
    userInput = JSON.parse(userInput);
    let outputResturant = document.querySelector(`#bestRestaurant p`);
    let outputWorkers = document.querySelector(`#workers p`);
    userInput.forEach((el) => {
      let [name, workers] = el.split(" - ");
      let workersArr = workers.split(", ");
      if (!result.find((e) => e.name === name)) {
        result.push({
          name,
          avgSalary: 0,
          bestSalary: 0,
          totalSalary: 0,
          workersArr,
        });
      } else {
        let currentRestaurant = result.find((e) => e.name === name);
        currentRestaurant.workersArr =
          currentRestaurant.workersArr.concat(workersArr);
        debugger;
      }
    });

    result.forEach((resturant) => {
      resturant.workersArr.forEach((worker) => {
        let [name, salary] = worker.split(" ");
        if (resturant.bestSalary < Number(salary))
          resturant.bestSalary = Number(salary);
        resturant.totalSalary += Number(salary);
      });
      resturant.avgSalary = (
        resturant.totalSalary / resturant.workersArr.length
      ).toFixed(2);
      // console.log(`Total`, resturant.totalSalary);
      // console.log(`Avg`, resturant.avgSalary);
      // console.log(`Best`, resturant.bestSalary);
    });
    result = result.sort((a, b) => b.avgSalary - a.avgSalary);

    result[0].workersArr.sort((a, b) => {
      let [nameA, salaryA] = a.split(" ");
      let [nameB, salaryB] = b.split(" ");
      return Number(salaryB) - Number(salaryA);
    });

    outputResturant.textContent = `Name: ${result[0].name} Average Salary: ${
      result[0].avgSalary
    } Best Salary: ${result[0].bestSalary.toFixed(2)}`;
    result[0].workersArr.forEach((worker) => {
      let [name, salary] = worker.split(" ");
      outputWorkers.textContent += `Name: ${name} With Salary: ${salary} `;
    });
  }
}

//   ["PizzaHut - Peter 500, George 300, Mark 800",
//   "TheLake - Bob 1300, Joe 780, Jane 660"]
//
