function toStringExtension() {
  class Person {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
    toString = () => {
      return `Person (name: ${this.name}, email: ${this.email})`;
    };
  }

  class Teacher extends Person {
    constructor(name, email, subject) {
      super(name, email);
      this.subject = subject;
    }
    toString = () => {
      return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
    };
  }
  class Student extends Person {
    constructor(name, email, course) {
      super(name, email);
      this.course = course;
    }
    toString = () => {
      return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
    };
  }
  return {
    Person,

    Teacher,

    Student,
  };
}
let classes = toStringExtension();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;
let p = new Person(`Ivan Milkov`, `IvanM@gmail.bg`);
console.log(p.toString());
let t = new Teacher(`Gosho Goshov`, `Gosho@gmail.bg`, `JS Advanced`);
console.log(t.toString());
let s = new Student(`Minko Minkov`, `Minko@gmail.bg`, `JS Coding`);
console.log(s.toString());
