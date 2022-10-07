function getPersons() {
  let peopleArr = [];
  class Person {
    constructor(firstName, lastName, age, email) {
      (this.firstName = firstName),
        (this.lastName = lastName),
        (this.age = age),
        (this.email = email);
    }
    toString = () => {
      return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    };
  }
  let annaSimpson = new Person(`Anna`, `Simpson`, 22, `anna@yahoo.com`);
  peopleArr.push(annaSimpson);
  let softuni = new Person(`SoftUni`);
  peopleArr.push(softuni);
  let stefanJonhsan = new Person(`Stephan`, `Johnson`, 25);
  peopleArr.push(stefanJonhsan);
  let gabrielPeterson = new Person(`Gabriel`, `Peterson`, 24, `g.p@gmail.com`);
  peopleArr.push(gabrielPeterson);
  return peopleArr;
}

console.log(getPersons());
