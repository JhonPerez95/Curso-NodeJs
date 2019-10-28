// setTimeout(() => {
//   console.log("Hola mundo");
// }, 3000);
//
//
let getUsuarioById = (id, callback) => {
  let usuario = {
    nombre: "Jhon",
    id // No es necesario asignarle el valor id por ES6
  };
  if (id === 20) {
    callback(`El usuarui con id ${id}, no existe en la DB`);
  } else {
    callback(null, usuario);
  }
};

getUsuarioById(1, (err, usuario) => {
  if (err) {
    return console.log(err, usuario);
  } else {
    console.log("Usuario de la base de datos", usuario);
  }
});
