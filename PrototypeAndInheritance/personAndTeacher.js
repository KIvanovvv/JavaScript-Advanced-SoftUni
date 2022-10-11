function result() {
  class Person {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  }

  class Teacher extends Person {
    constructor(name, email, subject) {
      super(name, email);
      this.subject = subject;
    }
  }

  return {
    Person,
    Teacher,
  };
}
let classes = result();
let classPerson = classes.Person;
let classTeacher = classes.Teacher;

let newP = new classPerson(`Ivan`, `ivan@gmail.bg`);
console.log(newP);
let newT = new classTeacher(`Gosho`, `gosho@gmai`, `Coding`);
console.log(newT);
