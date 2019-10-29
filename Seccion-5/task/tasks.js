const fs = require("fs");
const color = require("colors");

let listTask = [];

let guardarTask = () => {
  let data = JSON.stringify(listTask);
  fs.writeFile("db/data.json", data, err => {
    if (err) {
      throw new Error("No se pudo guardar la tarea", err);
    }
  });
};
let cargarTask = () => {
  try {
    listTask = require("../db/data.json");
  } catch (error) {
    listTask = [];
  }
};

let crearTask = descripcion => {
  cargarTask();
  let task = {
    descripcion,
    completado: false
  };
  listTask.push(task);
  guardarTask();
  return listTask;
};

let listarTask = () => {
  cargarTask();
  for (let i = 0; i < listTask.length; i++) {
    console.log("========Tareas por hacer ========".green);
    console.log(
      `Descripcion: ${listTask[i].descripcion}\nEstado: ${listTask[i].completado}`
    );
    console.log("=================================".green);
  }
};

let actualizarTask = (descripcion, completado = true) => {
  cargarTask();
  let i = listTask.findIndex(task => {
    return task.descripcion === descripcion;
  });
  console.log(i);
  if (i >= 0) {
    listTask[i].completado = completado;
    guardarTask();
    return true;
  } else {
    return false;
  }
};

let borrarTask = descripcion => {
  cargarTask();
  let newList = listTask.filter(task => {
    return task.descripcion !== descripcion;
  });
  if (newList.length === listTask.length) {
    return false;
  } else {
    listTask = newList;
    guardarTask();
    return true;
  }
};

module.exports = {
  crearTask,
  listarTask,
  actualizarTask,
  borrarTask
};
