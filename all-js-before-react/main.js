// Nullish Coalescing Operator

// const age = 26;

// 0, '', [], false, undefined, null => falsy (Valores não validos para operadores || 'ou')

// document.body.innerText = `Sua idade é: ${age ?? '"Não informado"'} anos!`;

// // Objeto
// const user = {
//   name: "Sandro",
//   idade: 26,
//   address: {
//     street: "Rua Dr. José Humberto Nunes",
//     number: 564,
//   },
// };

// 'name' in user    'Existe nome em user?'
// document.body.innerText = "name" in user; // true
// document.body.innerText = "nickname" in user; // false

// document.body.innerText = Object.keys(user); // name, age, address
// document.body.innerText = Object.values(user); // Sandro,26,[object Object]
// document.body.innerText = JSON.stringify(Object.values(user)); // retorna todo objeto
// document.body.innerText = JSON.stringify(Object.entries(user)); // retorna o vetor com outros vetores

// Desestruturação
// para evitar repetir o "addres", use {}
// const address = user.address;
// function mostrarIdade(user) {
//   return user.idade;
// }

// function mostrarIdade({ idade }) {
//   return idade;
// }

// const { address, idade: teste, nickname = "Júnior" } = user;

// document.body.innerText = JSON.stringify({ address, teste, nickname });
// document.body.innerText = mostrarIdade(user);

// Rest operator
// retorna toda operação a partir do name
// const { name, ...rest } = user;

// const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const first = arrayNumbers[0];
// const second = arrayNumbers[1];
// const [first, , third, ...rest] = arrayNumbers;

// document.body.innerText = JSON.stringify([first, third, rest]);

// Short Syntax

// const name = "Sandro";
// const age = 26;

// const user = {
//   name,
//   age,
// };

// Optional Chaining

// const user = {
//   name: "Sandro",
//   age: 26,
//   address: {
//     street: "Rua teste",
//     number: 564,
//     zip: {
//       code: "46430000",
//       city: "Guanambi",
//     },
//     showFullAddress() {
//       return "ok";
//     },
//   },
// };

// codigo ruim
// document.body.innerText = JSON.stringify(
//   user.address
//     ? user.address.zip
//       ? user.address.zip.code
//       : "Não informado"
//     : "Não informado"
// );

// codigo bom
// document.body.innerText = JSON.stringify(
//   user.address?.zip?.code ?? "Não informado"
// );

// document.body.innerText = user.address?.showFullAddress?.();

// const key = "street";

// document.body.innerText = user.address[key];

// Métodos de array

// const array = [1, 2, 3, 4, 5, 6];

// for (const i of array) {
//   document.body.innerText += i;
// }

// array.forEach((item) => {
//   document.body.innerText += item;
// });

// map, filter, every, some, find, findIndex, reduce

// const newArray = array.map((item) => {
//   if (item % 2 === 0) {
//     return item * 10;
//   }
//   return item;
// });

// const newArray = array
//   .filter((item) => item % 2 !== 0)
//   .map((item) => {
//     return item * 10;
//   });

// const everyItensNumbers = array.every((item) => {
//   return typeof item === "number";
// });

// const oneItemNotANumber = array.some((item) => {
//   return typeof item !== "number";
// });

// find retorna o primeiro item true
// const evenNumber = array.find((item) => {
//   return item % 2 === 0;
// });

// retorna o valor do index do primeiro item true
// const evenNumber = array.findIndex((item) => {
//   return item % 2 === 0;
// });

// const sum = array.reduce((accumulator, item) => {
//   return (accumulator += item);
// }, 0);

// document.body.innerText = JSON.stringify(sum);

// Template Literals
// const name = "Sandro";
// // const message = "Bem-vindo " + name;
// const message = `Bem-vindo, ${name ?? "visitante"}`;

// document.body.innerText = message;

// Promises

// .then/.catch

// const sum2numbers = (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // resolve(a + b);
//       reject(a + b);
//     }, 2000);
//   });
// };

// sum2numbers(2, 4)
//   .then((sum) => {
//     document.body.innerText = sum;
//   })
//   .catch((err) => {
//     console.log("Erro: ", err);
//   });

// fetch("https://api.github.com/users/diego3g")
//   .then((response) => {
//     response.json().then((body) => {
//       console.log(body);
//     });
//   })
//   .catch((err) => {
//     console.log("Erro: ", err);
//   });

// fetch("https://api.github.com/users/diego3g")
//   .then((response) => {
//     return response.json();
//   })
//   .then((body) => {
//     console.log(body);
//   })
//   .catch((err) => {
//     console.log("Erro: ", err);
//   })
//   .finally(() => {
//     console.log("Deu Certo");
//   });

// async function fetchDataFromGithub() {
//   try {
//     const response = await fetch("https://api.github.com/users/diego3g");
//     const body = await response.json();
//     return body.name;
//     console.log(body);
//   } catch (err) {
//     console.log("Erro: ", err);
//   }
// }

// fetchDataFromGithub().then((name) => {
//   console.log(name);
// });

// import { sum, sub, pi } from "./js-before-react/lib/math.js";
// import sum2 from "./js-before-react/lib/sum.js";

// console.log(sum(1, 2));
// console.log(sub(1, 2));
// console.log(pi);

// console.log(sum2(1, 2));

// import * as math from "./js-before-react/lib/math.js";
// console.log(math);

// import { sum as soma } from "./js-before-react/lib/math.js";

// console.log(soma(2, 3));

import { sum } from "./js-before-react/lib/sum.js";

console.log(sum(1, 3));
