// Funcion flecha
let saluda = () => {
  return "hola mundo";
};
console.log(saluda());

let saludar = nombre => {
  return `Hola ${nombre}`;
};

console.log(saludar("Fernando"));

//
let deadpool = {
  nombre: "Wade",
  apellido: "Winston",
  poder: "Regeneracion",
  getNombre() {
    return `${this.nombre} ${this.apellido}  - Poder: ${this.poder}`;
  }
};

console.log(deadpool.getNombre());
