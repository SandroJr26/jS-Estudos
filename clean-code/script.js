// 1 - Nomeando variáveis e funções.

// Jeito errado
const d = new Date();
const x = 5;
const y = 4;

// Jeito certo

const currentDate = new Date();
const speed = 5;
const numberOfTires = 4;

// Jeito errado
function fn(a, b) {
  return a * b;
}

// Jeito certo
function multiply(num1, num2) {
  return num1 * num2;
}

// Jeito errado
const p = {
  n: "Nátalia",
  a: 20,
};

// Jeito certo
const person = {
  name: "Nátalia",
  age: 20,
};

// 2 - Organização do código.
// Código sem identação, espaçamento ou { }
function add(a, b) {
  return a + b;
}

const name = "Matheus";
const age = 28;

if (x === 5) {
  // console.log("Oi");
} else {
  console.log("Outra coisa");
}

// 3 - Comentários desnecessários.

// Jeito errado
// Soma a + b e retona o valor
function sumNumber(a, b) {
  return a + b;
}

// Jeito certo

/*
 * Soma dois números e retorna o resultado
 * @param {number} a - O primeiro número
 * @param {number} b - O segundo número
 * @returns {number} O resultado da soma
 */
function sumNumber2(a, b) {
  return a + b;
}

// Jeito errado
const result1 = x < 0 ? 0 : x > 100 ? 100 : x;

// Jeito certo
// Garante que o valor de x esteja entre 0 e 100
const result2 = x < 0 ? 0 : x > 100 ? 100 : x;

// 4 - Duplicação de código.
// Refatorar o código para eliminar o excesso de código
const SPACE = " ";
function getFullName(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`;
  return fullName;
}

function getEmployeeFullName(firstName, lastName) {
  const fullName = firstName + SPACE + lastName;
  return fullName;
}

// Jeito errado
function getPrice(product) {
  let price;
  if (product === "Caneta") {
    price = 20;
  } else if (product === "Lápis") {
    price = 15;
  } else if (product === "Apagador") {
    price = 30;
  } else if (product === "Lapizeira") {
    price = 25;
  } else {
    return "Produto não cadastrado";
  }
}

// Jeito certo
const products = {
  caneta: 20,
  lapis: 15,
  apagador: 30,
  lapizeira: 25,
};

function getProductPrice(product) {
  return products[product];
}

// 5 - Estruturas de controle claras.
// Jeito errado
// true ou false ! => false ou true
// if (!isNotValid) {
//   // ...
// }

// Jeito certo
// if (isValid) {
//   // ...
// }

// Jeito errado
let message1;
let isSuccess = false;

if (isSuccess) {
  message1 = "Sucesso!";
} else {
  message1 = "Falha!";
}

console.log(message1);

// Jeito certo
isSuccess = true;
const message2 = isSuccess ? "Sucesso!" : "Falha!";

console.log(message2);
