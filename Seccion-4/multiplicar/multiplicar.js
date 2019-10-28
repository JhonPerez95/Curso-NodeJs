const fs = require("fs");
const colors = require("colors");

let listarTabla = (base, limite) => {
  if (!Number(base)) {
    return `El valor ingresado ${base} no es un numero`;
  } else {
    console.log("================".green);
    console.log(`Tabla del: ${base}\n`.green);
    console.log("================".green);
    for (let i = 0; i <= limite; i++) {
      console.log(`${base} * ${i} = ${base * i}\n`);
    }
  }
};

let crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    let data = "";
    if (!Number(base)) {
      reject(`El valor ingresado ${base} no es un numero`);
    } else {
      for (let i = 0; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
      }

      fs.writeFile(`tablas/tabla-${base}-al ${limite}.txt`, data, err => {
        if (err) {
          reject(err);
        } else {
          resolve(colors.red(`${base}`));
        }
      });
    }
  });
};

module.exports = {
  crearArchivo,
  listarTabla
};
