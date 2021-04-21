const Propiedades = require('../models/propiedades')
require("../config/index");


const departamento1 = {
    livingPlace: "departamento",
    tipoDeOperacion: "alquiler",
    direccion: "3 de febrero 2200",
    ubicacion: "montes de oca",
    ambientes: 3,
    superficie: 80,
    price: 150000,
    toilet: 2,
    cocheras: 1,
    imageUrl: "https://images.homify.com/c_fill,f_auto,q_0,w_740/v1490750889/p/photo/image/1926732/1.jpg",
};

const departamento2 = {

    livingPlace: "Casa",
    tipoDeOperacion: "Venta",
    direccion: "Bolivar 505",
    ubicacion: "San martin",
    ambientes: 3,
    superficie: 50,
    price: 15000,
    toilet: 2,
    cocheras: 1,
    imageUrl: "https://i.pinimg.com/originals/fe/7b/7b/fe7b7bdbd8116f54e8d5ccb2002b3274.jpg"

};

const departamento3 = {
    livingPlace: "Casa",
    tipoDeOperacion: "Venta",
    direccion: "Bolivar 505",
    ubicacion: "San martin",
    ambientes: 3,
    superficie: 50,
    price: 15000,
    toilet: 2,
    cocheras: 1,
    imageUrl: "https://i.pinimg.com/originals/fe/7b/7b/fe7b7bdbd8116f54e8d5ccb2002b3274.jpg"

};

const departamento4 = {
    livingPlace: "Casa",
    tipoDeOperacion: "Venta",
    direccion: "Bolivar 505",
    ubicacion: "San martin",
    ambientes: 3,
    superficie: 50,
    price: 15000,
    toilet: 2,
    cocheras: 1,
    imageUrl: "https://i.pinimg.com/originals/fe/7b/7b/fe7b7bdbd8116f54e8d5ccb2002b3274.jpg"
};
const departamento5 = {
    livingPlace: "Casa",
    tipoDeOperacion: "Venta",
    direccion: "Bolivar 505",
    ubicacion: "San martin",
    ambientes: 3,
    superficie: 50,
    price: 15000,
    toilet: 2,
    cocheras: 1,
    imageUrl: "https://i.pinimg.com/originals/fe/7b/7b/fe7b7bdbd8116f54e8d5ccb2002b3274.jpg"

};
const departamento6 = {
    livingPlace: "Casa",
    tipoDeOperacion: "Venta",
    direccion: "Bolivar 505",
    ubicacion: "San martin",
    ambientes: 3,
    superficie: 50,
    price: 15000,
    toilet: 2,
    cocheras: 1,
    imageUrl: "https://i.pinimg.com/originals/fe/7b/7b/fe7b7bdbd8116f54e8d5ccb2002b3274.jpg"

};
const departamento7 = {
    livingPlace: "Casa",
    tipoDeOperacion: "Venta",
    direccion: "Bolivar 505",
    ubicacion: "San martin",
    ambientes: 3,
    superficie: 50,
    price: 15000,
    toilet: 2,
    cocheras: 1,
    imageUrl: "https://i.pinimg.com/originals/fe/7b/7b/fe7b7bdbd8116f54e8d5ccb2002b3274.jpg"

};
const departamento8 = {
    livingPlace: "Casa",
    tipoDeOperacion: "Venta",
    direccion: "Bolivar 505",
    ubicacion: "San martin",
    ambientes: 3,
    superficie: 50,
    price: 15000,
    toilet: 2,
    cocheras: 1,
    imageUrl: "https://i.pinimg.com/originals/fe/7b/7b/fe7b7bdbd8116f54e8d5ccb2002b3274.jpg"

};


Propiedades.insertMany([departamento1, departamento2, departamento3, departamento4, departamento5, departamento6, departamento7, departamento8])
    .then(() => {
        console.log('seedeada rey propiedades')
        process.exit();
    });
