class Person {
  constructor(name) {
    this.name = name;
  }
  sayMyNmae() {
    return `My name is ${this.name}!`;
  }
}

module.exports = {
  Person,
};
