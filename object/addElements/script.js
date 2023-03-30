// =
// variavel

// objeto
const person = {
  name: "Sandro",
  age: 26,
};

person.work = "Garçom";

// []

const car2 = {
  rodas: 4,
  portas: 4,
};

car2["cor"] = "Azul";

const propertyName2 = "rodas";

car2[propertyName2] = 5;

// Object => defineProperty
Object.defineProperty(car2, "motor", {
  value: 2.0,
  writable: false,
});

const computer = {};

Object.defineProperties(computer, {
  placaMae: {
    value: "AMD",
    writable: true,
  },
  processador: {
    value: "I5",
    writable: false,
  },
  fonte: {
    value: "650 wats",
    writable: false,
  },
});

computer.placaMae = "Intel";
computer.processador = "Amd";
computer.fonte = "550 wats";
