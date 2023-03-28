// 1 - Promises
// promises based => then e catch's

function loadSomeData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const data = {
        id: 123,
        name: "Algum dado",
      };

      resolve(data);
    }, 1000);
  });
}

// loadSomeData()
//   .then(function (data) {
//     console.log(data);
//     return data;
//   })
//   .then(function (newData) {
//     console.log(`O nome é: ${newData.name}`);
//   })
//   .catch(function (error) {
//     console.log(`Erro ao carregar dadods: ${error}`);
//   });

// 2 - Arrow Function => {}
// function comum
function sum(a, b) {
  return a + b;
}
sum(2, 4);

// Arrow Function equivalente

const sum2 = (a, b, c) => a + b - c;
sum2(4, 1, 25);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numbersPairs = numbers.filter((number) => {
  return number % 2 === 0;
});

// 3 - Destructuring
const users = {
  name: "Sandro",
  age: 26,
  email: "sandrojkl26@hotmail.com",
};

// extrair nome e email
const { name, email } = users;
// console.log(name, email);

// extrair itens de array
const numbersB = [1, 2, 3];
const [a, b, c] = numbersB;

// console.log(a, b, c);

function displayDataUsers({ name, email }) {
  console.log("Nome: " + name);
  console.log("Email: " + email);
}

// displayDataUsers(users);

// 4 - Template literals
const nameUser = "Sandro";
const age = 26;
const message = `${nameUser} tem ${age} anos de idade.`;

message;

const balance = 1000;
const messageB = `O seu saldo atual é de: ${
  balance > 0 ? `R$ ${balance}` : "negativo"
}`;

messageB;

// 5 - Rest e spread
// rest
function sumC(...numbers) {
  return numbers.reduce((total, number) => {
    return total + number;
  });
}
sumC(1, 2, 3, 4, 5);

// spread
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const combinedNumbers = [...numbers1, ...numbers2];

combinedNumbers;

const usersB = {
  name: "Sandro",
  age: 26,
};

const userWithEmail = { ...usersB, address: "Rua Tomaz " };

userWithEmail;

// 6 - Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  present() {
    console.log(`O meu nome é ${this.name} e eu tenho ${this.age}`);
  }
}

const sandro = new Person("Sandro", 26);
const ricardo = new Person("Ricardo", 22);

// sandro.present();
// ricardo.present();

class Employee extends Person {
  constructor(name, age, wage) {
    super(name, age);
    this.wage = wage;
  }
  presentEmployee() {
    // console.log(
    //   `O meu nome é ${this.name} recebo ${this.wage} e tenho ${this.age}`
    // );
  }
}

const wageEmployee = new Employee("Sandro", 26, 4500);

wageEmployee.presentEmployee();

// 7 - Métodos de Array
// map
const numbersC = [1, 2, 3, 4];
const doubleNumbers = numbersC.map((number) => {
  return number * 2;
});

doubleNumbers;

// filter
const numbersD = [1, 2, 3, 4, 5, 6, 7];
const numbersOdd = numbersD.filter((number) => {
  return number % 2 === 1;
});

numbersOdd;

// reduce
const numbersE = [1, 2, 3, 4, 5, 6, 7];
const sumNumbers = numbersE.reduce((total, number) => {
  return total + number;
}, 0);
sumNumbers;

// find
const numbersF = [1, 2, 3, 4, 5, 6, 7];
const number3 = numbersF.find((number) => {
  return number === 3;
});
number3;

// forEach
const names = ["Sandro", "Rafael", "Ricardo"];
names.forEach((name) => {
  // console.log(name);
});
