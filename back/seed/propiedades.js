const chalk = require("chalk");
const Propiedades = require('../models/propiedades')
require("../config/index");

const log = (...args) => console.log(chalk.yellow.bgBlue(...args));

const departamento1 = {
    livingPlace: "departamento",
    direccion: "3 de febrero 2200",
    price: 50000000,
    location: "rivadiabia",
    imageUrl: "https://images.homify.com/c_fill,f_auto,q_0,w_740/v1490750889/p/photo/image/1926732/1.jpg",
    ubicacion: "montes de oca",
    available: true
};

const departamento2 = {
    livingPlace: "departamento",
    direccion: "3 de febrero 2200",
    price: 50000000,
    location: "rivadiabia",
    imageUrl: "https://static1.sosiva451.com/2912995/9126ac96-e58b-470b-a932-44e14d61956c_u_large.jpg",
    ubicacion: "montes de oca",
    available: true
};

const departamento3 = {
    livingPlace: "departamento",
    direccion: "3 de febrero 2200",
    price: 50000000,
    location: "rivadiabia",
    imageUrl: "https://static1.sosiva451.com/2912995/9126ac96-e58b-470b-a932-44e14d61956c_u_large.jpg",
    ubicacion: "montes de oca",
    available: true
};

const departamento4 = {
    livingPlace: "departamento",
    direccion: "3 de febrero 2200",
    price: 50000000,
    location: "rivadiabia",
    imageUrl: "https://static1.sosiva451.com/2912995/9126ac96-e58b-470b-a932-44e14d61956c_u_large.jpg",
    ubicacion: "montes de oca",
    available: true
};



Propiedades.insertMany([departamento1, departamento2, departamento3, departamento4])
    .then((deptos) => {
        console.log('seedeada rey')
        process.exit();
    });
