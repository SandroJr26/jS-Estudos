class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
  static speak() {
    return "Hello Word";
  }
}

const pessoa1 = new Person("Sandro", "Junior", 26);

pessoa1.getFullName();

Person.speak();

// herança
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} made some noise!`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    console.log(`${this.name} barked!`);
  }
}

const animal = new Animal("Simba");
const dog = new Dog("Snicker");

animal.speak();
dog.speak();
