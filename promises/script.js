/* 
  SINGLE THREAD
  Io não bloqueante
  
  ASSINCRONA
  EX: BANCO PEGAR CEP
  CEP -> Correireios

  PROMISES é um objeto JS que te dá um conjunto de funcionalidades pra gerenciar um controle melhor da parte assincrona da linguagem
  */

console.log("Primeiro");

setTimeout(function () {
  console.log("Segundo");
}, 0);

console.log("Terceiro");

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
  console.log("Promise dasd", data);
});

function alreadyRejected() {
  return Promise.reject();
}

alreadyRejected().catch(function () {
  // console.log("Promise rejeitada");
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
  console.log(message);
});

promiseWorked().catch(function (message) {
  console.log(message);
});

// https://viacep.com.br/ws/46430000/json/

alreadyPerformed().then(function (cep) {
  return fetch("https://viacep.com.br/ws/" + cep + "/json/")
    .then(function (data) {
      return data.json();
    })
    .then(function () {
      return alreadyRejected();
    })
    .then(function (address) {
      console.log(address.cep);
    })
    .catch(function () {
      console.log("Aconteceu algum erro");
    });
});
