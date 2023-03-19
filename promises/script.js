/* 
  SINGLE THREAD
  Io não bloqueante
  
  ASSINCRONA
  EX: BANCO PEGAR CEP
  CEP -> Correios

  PROMISES é um objeto JS que te dá um conjunto de funcionalidades pra gerenciar um controle melhor da parte assincrona da linguagem
  */

// console.log("Primeiro");

setTimeout(function () {
  // console.log("Segundo");
}, 0);

// console.log("Terceiro");

/*
  PENDENTE
  REALIZADA
  REJEITADA
  ESTABELECIDA
*/

function alreadyPerformed() {
  return Promise.resolve("46430-000");
}

alreadyPerformed().then(function (data) {
  // console.log("Promise dasd", data);
});

function alreadyRejected() {
  return Promise.reject();
}

alreadyRejected().catch(function () {
  console.log("Promise rejeitada");
});

// Maneira de uso para um melhor gerenciamento de código
function promiseWorked() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Foi aceita");
    }, 1000);
    // reject("Foi recusada");
  });
}

promiseWorked().then(function (message) {
  // console.log(message);
});

promiseWorked().catch(function (message) {
  // console.log(message);
});

// https://viacep.com.br/ws/46430000/json/

function getCEP(cep) {
  return fetch("https://viacep.com.br/ws/" + cep + "/json/");
}
function getData(data) {
  return data.json();
}
function reject() {
  return alreadyRejected();
}
function getAddress(address) {
  // console.log(address);
}
function handleError(error) {
  // console.log("Aconteceu algum erro", error);
}

alreadyPerformed()
  .then(getCEP)
  .then(getData)
  .then(reject)
  .then(getAddress)
  .catch(handleError)
  .finally(function () {
    // console.log("Sempre será executada");
  });

function delay500() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Demora 500");
    }, 500);
    // reject("Foi recusada");
  });
}

function delay200() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Demora 200");
    }, 200);
    // reject("Foi recusada");
  });
}

// Retorna todas as Promises após serem resolvidas
// Promise.all([delay200(), alreadyPerformed(), delay500("46430000")]).then(
//   function (resolvidPromisse) {
//     console.log(resolvidPromisse);
//   }
// );

// Retorna a primeira Promisse resolvida ou primeira rejeitada
Promise.race([delay200(), alreadyRejected(), delay500("46430000")]).then(
  function (resolvidPromisse) {
    console.log(resolvidPromisse);
  },
  function (valueRejected) {
    console.log(valueRejected);
  }
);
