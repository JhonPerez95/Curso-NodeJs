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

let getEmpleado = id => {
  return new Promise((resolve, reject) => {
    let empleadoDB = empleados.find(empleado => {
      return empleado.id === id;
    });
    if (!empleadoDB) {
      reject(`No existe un empleado con el ID ${id}`);
    } else {
      resolve(empleadoDB);
    }
  });
};

let getSalario = empleado => {
  return new Promise((resolve, reject) => {
    let salarioDB = salarios.find(salario => {
      return salario.id === empleado.id;
    });
    if (!salarioDB) {
      reject(`No se encontro salario para el empleado ${empleado.nombre}`);
    } else {
      resolve({
        nombre: empleado.nombre,
        salario: salarioDB.salario,
        id: empleado.id
      });
    }
  }); 
};

getEmpleado(3)
  .then(empleado => {
    console.log(`El empleado es ${empleado.nombre}`);
    return getSalario(empleado);
  })
  .then(res => {
    console.log(`El salario del empleado ${res.nombre} es de ${res.salario}$`);
  })
  .catch(err => {
    console.log(err);
  });
