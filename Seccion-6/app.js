const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Dirección de la ciudad para obtener el clima",
    demand: true
  }
}).argv;

// lugar.getLugarLatLng(argv.direccion).then(console.log);

// clima
//   .getClima(11.13, 123.959999)
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });

const getInfo = async direccion => {
  try {
    const coord = await lugar.getLugarLatLng(direccion);
    const temp = await clima.getClima(coord.lat, coord.lng);
    return `La temperatura de ${coord.direccion} es de ${temp}`;
  } catch (error) {
    retur`No se pudo encontrar la temperatura de ${direccion}`;
  }
};

getInfo(argv.direccion)
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
