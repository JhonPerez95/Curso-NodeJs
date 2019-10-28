let empleados = [
  {
    id: 1,
    nombre: "Jhon"
  },
  {
    id: 2,
    nombre: "Fernando"
  },
  {
    id: 3,
    nombre: "Diego"
  }
];

let salarios = [
  {
    id: 1,
    Salarios: 2200
  },
  {
    id: 2,
    salario: 3000
  }
];

let getEmpleado = (id, callback) => {
  let empleadoDB = empleados.find(empleado => {
    return empleado.id === id;
  });
  if (!empleadoDB) {
    callback(`No existe un empleado con el ID ${id}`);
  } else {
    callback(null, empleadoDB);
  }
};

let getSalario = (empleado, callback) => {
  let salarioDB = salarios.find(salario => {
    return salario.id === empleado.id;
  });
  if (!salarioDB) {
    callback(`No se encontro salario para el usuario ${empleado.nombre}`);
  } else {
    callback(null, {
      nombre: empleado.nombre,
      salario: salarioDB.salario,
      id: empleado.id
    });
  }
};

//
getEmpleado(2, (err, empleado) => {
  if (err) {
    return console.log(err);
  }
  getSalario(empleado, (err, res) => {
    if (err) {
      return console.log(err);
    } else {
      console.log(
        `El salario del empleado ${res.nombre} es de ${res.salario} $`
      );
    }
  });
});
