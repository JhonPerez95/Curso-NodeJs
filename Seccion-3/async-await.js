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

let getEmpleado = async id => {
  let empleadoDB = empleados.find(empleado => {
    return empleado.id === id;
  });
  if (!empleadoDB) {
    throw new Error(`No existe un empleado con el ID ${id}`);
  } else {
    return empleadoDB;
  }
};

let getSalario = async empleado => {
  let salarioDB = salarios.find(salario => {
    return salario.id === empleado.id;
  });
  if (!salarioDB) {
    throw new Error(
      `No se encontro salario para el usuario ${empleado.nombre}`
    );
  } else {
    return {
      nombre: empleado.nombre,
      salario: salarioDB.salario,
      id: empleado.id
    };
  }
};

let getInformacion = async id => {
  let empleado = await getEmpleado(id);
  let res = await getSalario(empleado);
  return `El salario del empleado ${res.nombre} es de ${res.salario}`;
};

getInformacion(4)
  .then(info => {
    console.log(info);
  })
  .catch(err => {
    console.log(err);
  });
