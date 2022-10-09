class Company {
  constructor() {
    this.departments = {};
  }
  addEmployee(name, salary, position, department) {
    if (
      !name ||
      !salary ||
      salary < 0 ||
      typeof salary !== `number` ||
      !position ||
      !department
    ) {
      throw new Error("Invalid input!");
    }
    if (!this.departments.hasOwnProperty(department)) {
      this.departments[department] = {};
    }
    this.departments[department][name] = { salary, position };
    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }
  bestDepartment() {
    let departmentNames = Object.keys(this.departments);
    let highestSalaries = 0;
    let highestPayingDep;
    let numOfEmployees = 0;
    let nameOfEmployees = [];
    let res = "";
    let sortedRes = [];
    for (let depart of departmentNames) {
      let allEmployesinDepart = Object.keys(this.departments[depart]);
      let currentSalaries = 0;
      for (let employee of allEmployesinDepart) {
        currentSalaries += Number(this.departments[depart][employee].salary);
      }
      if (currentSalaries / allEmployesinDepart.length > highestSalaries) {
        highestSalaries = currentSalaries;
        highestPayingDep = depart;
        numOfEmployees = allEmployesinDepart.length;
        nameOfEmployees = allEmployesinDepart.slice();
      }
    }
    res += `Best Department is: ${highestPayingDep}\nAverage salary: ${(
      highestSalaries / numOfEmployees
    ).toFixed(2)}`;
    let allSalaries = [];
    let allPositions = [];
    for (let employee of nameOfEmployees) {
      let salary = this.departments[highestPayingDep][employee].salary;
      allPositions.push(this.departments[highestPayingDep][employee].position);
      allSalaries.push(salary);
    }

    for (let i = 0; i < nameOfEmployees.length; i++) {
      sortedRes.push({
        name: nameOfEmployees[i],
        salary: allSalaries[i],
        position: allPositions[i],
      });
    }
    sortedRes = sortedRes
      .sort((a, b) => a.name.localeCompare(b.name))
      .sort((a, b) => b.salary - a.salary);

    for (let el of sortedRes) {
      res += `\n${el.name} ${el.salary} ${el.position}`;
    }

    return res;
  }
}
let c = new Company();

let actual1 = c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
let expected1 = "New employee is hired. Name: Stanimir. Position: engineer";
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());
