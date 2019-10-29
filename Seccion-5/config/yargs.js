const descripcion = {
  demand: true,
  alias: "d"
};
const completado = {
  default: true,
  alias: "c"
};

const argv = require("yargs")
  .command("crear", "Crea tarea por hacer", descripcion)
  .command(
    "actualizar",
    "Actualiza el estado completado",
    descripcion,
    completado
  )
  .command("borrar", "Borra una tarea", descripcion)
  .help().argv;

module.exports = {
  argv
};
