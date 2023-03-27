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

console.log(numbersPairs);
