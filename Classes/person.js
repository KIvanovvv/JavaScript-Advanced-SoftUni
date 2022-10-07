//`{firstName} {lastName} (age: {age}, email: {email})`
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

let myself = new Person(`Krasimir`, `Ivanov`, 26, `k.ivanov@yahoo.com`);

console.log(myself);
//myself.toString;
