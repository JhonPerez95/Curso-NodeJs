// Require

const multiplicar = require("./multiplicar/multiplicar");
const { argv } = require("./config/yargs");

let commando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (commando) {
  case "crear":
    multiplicar
      .crearArchivo(base, limite)
      .then(archivo => {
        console.log(archivo);
      })
      .catch(err => {
        console.log(err);
      });
    break;

  case "listar":
    multiplicar.listarTabla(base, limite);
    break;

  default:
    console.log("Comando no reconocido");
}
