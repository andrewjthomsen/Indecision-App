class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    // return 'Hi. I am ' + this.name + '!';
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
      super(name, age);
      this.major = major;
  }
}

const me = new Student("Andrew Thomsen", 26, "Web Development");
console.log(me.getDescription());

const other = new Student();
console.log(other);
