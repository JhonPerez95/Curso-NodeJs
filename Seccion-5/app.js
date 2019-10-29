const argv = require("./config/yargs").argv;
const Task = require("./task/tasks");

let comando = argv._[0];
let descripcion = argv.descripcion;
let completado = argv.completado;

switch (comando) {
  case "crear":
    Task.crearTask(descripcion);
    console.log(tarea);
    break;
  case "listar":
    Task.listarTask();
    break;
  case "actualizar":
    let actualizado = Task.actualizarTask(descripcion, completado);
    console.log(actualizado);
    break;
  case "borrar":
    let borrado = Task.borrarTask(descripcion);
    console.log(borrado);
    break;
  default:
    console.log("Comando no reconocido");
}
