
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
    livingPlace: "departamento",
    direccion: "Av. Olazábal 4800",
    price: 100000,
    location: "Villa Urquiza",
    imageUrl: "https://static1.sosiva451.com/2912995/9126ac96-e58b-470b-a932-44e14d61956c_u_large.jpg",
    ubicacion: "Villa Urquiza",
    available: true
};

const departamento3 = {
    livingPlace: "departamento",
    direccion: "Gorriti 4200",
    price: 300000,
    location: "Palermo",
    imageUrl: "https://www.on24.com.ar/wp-content/uploads/2020/03/Zonaprop-Dpto-Home.png",
    ubicacion: "Palermo",
    available: true
};

const departamento4 = {
    livingPlace: "departamento",
    direccion: "Cuba 2000",
    price: 300000,
    location: "Belgrano",
    imageUrl: "https://www.ciudaris.com/blog/wp-content/uploads/ventajas-vivir-departamento-03.jpg",
    ubicacion: "Belgrano",
    available: true
};
const departamento5 = {
    livingPlace: "departamento",
    direccion: "Mercedes 2200",
    price: 5800000,
    location: "Devoto",
    imageUrl: "https://www.arquimaster.com.ar/web/wp-content/uploads/2020/11/departamento_camilo_slide.jpg",
    ubicacion: "Devoto",
    available: true
};
const departamento6 = {
    livingPlace: "departamento",
    direccion: "Neuquen 765",
    price: 50000000,
    location: "Caballito",
    imageUrl: "https://images.estilosdeco.com/2018/04/departamento-moderno-masculino-38-metros-1.jpg",
    ubicacion: "Caballito",
    available: true
};
const departamento7 = {
    livingPlace: "departamento",
    direccion: "Entre rios 600",
    price: 62000,
    location: "Martinez",
    imageUrl: "https://imgar.zonapropcdn.com/avisos/1/00/47/15/95/39/720x532/1750591641.jpg",
    ubicacion: "Martinez",
    available: true
};
const departamento8 = {
    livingPlace: "departamento",
    direccion: "Chivilcoy 200",
    price: 90000,
    location: "Floresta",
    imageUrl: "https://static1.sosiva451.com/7595398/42f34445-192b-4c1b-a1e7-5b1d76684948_u_small.jpg",
    ubicacion: "Floresta",
    available: true
};


Propiedades.insertMany([departamento1, departamento2, departamento3, departamento4, departamento5, departamento6, departamento7, departamento8])
    .then(() => {
        console.log('seedeada rey propiedades')
        process.exit();
    });
