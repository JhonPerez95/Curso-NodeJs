// Require
const fs = require("fs");
const colors = require("colors");

let listarTabla = (base, limite) => {
  if (Number(base)) {
    console.log("================".green);
    console.log(`Tabla del: ${base}\n`.green);
    console.log("================".green);
    for (let i = 0; i <= limite; i++) {
      console.log(`${base} * ${i} = ${base * i}\n`);
    }
  } else {
    return console.log(`El valor ingresado ${base} no es un numero`);
  }
};

let crearArchivo = async (base, limite) => {
  let data = "";
  if (Number(base)) {
    for (let i = 0; i <= limite; i++) {
      data += `${base} *   ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}-al ${limite}.txt`, data, err => {
      if (err) {
        throw new Error(err);
      } else {
        return `El archivo de la tabla: ${base} fue creado`;
      }
    });
  } else {
    return console.log(`El valor ingresado ${base} no es un numero`);
  }
};

module.exports = {
  crearArchivo,
  listarTabla
};
