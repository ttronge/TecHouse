const Propiedades = require('../models/propiedades')
require("../config/index");
//Casa Departamento
//Venta Alquiler

const departamento1 = {
    livingPlace: "Departamento",
    tipoDeOperacion: "Venta",
    direccion: "Charcas 2001",
    ubicacion: "Palermo",
    ambientes: 1,
    superficie: 80,
    price: 250000,
    toilet: 2,
    cocheras: 1,
    descripcion: "Departamento en Venta en Palermo de 1 ambiente.Monoambiente dividido al frente con balcón",
    imageUrl: "https://www.on24.com.ar/wp-content/uploads/2020/03/Zonaprop-Dpto-Home.png",
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
    descripcion: "Este departamento es un ambiente y medio en un 3er piso al contrafrente.",
    imageUrl: "https://images.estilosdeco.com/2018/04/departamento-moderno-masculino-38-metros-1.jpg"

};

const departamento3 = {
    livingPlace: "Departamento",
    tipoDeOperacion: "Alquiler",
    direccion: "J.L.Borges 2500",
    ubicacion: "Palermo",
    ambientes: 2,
    superficie: 50,
    price: 80000,
    toilet: 2,
    cocheras: 1,
    descripcion: "Departamento en Venta en Palermo de 2 ambientes. Muy buen estado. Ideal inversión, apto profesional.",
    imageUrl: "https://i.pinimg.com/originals/fe/7b/7b/fe7b7bdbd8116f54e8d5ccb2002b3274.jpg"

};

const departamento4 = {
    livingPlace: "Alquiler",
    tipoDeOperacion: "Venta",
    direccion: "Arenales 3658",
    ubicacion: "Devoto",
    ambientes: 3,
    superficie: 70,
    price: 15000,
    toilet: 2,
    cocheras: 1,
    descripcion: "El edificio esta implantado en un lote de 8 metros de frente por 41 metros de fondo, presenta un elevado diseño arquitectónico que maximiza los espacios, destacándose también por su excelente iluminación.",
    imageUrl: "https://www.arquimaster.com.ar/web/wp-content/uploads/2020/11/departamento_camilo_slide.jpg"
};
const departamento5 = {
    livingPlace: "Casa",
    tipoDeOperacion: "Venta",
    direccion: "Chubut 1005",
    ubicacion: "Pilar",
    ambientes: 7,
    superficie: 500,
    price: 3500000,
    toilet: 3,
    cocheras: 5,
    descripcion: "Hermoso departamento en esquina de 4 amb y dependencia, todos los ambientes al exterior , muy luminoso, al frente, con balcón francés",
    imageUrl: "https://www.hola.com/imagenes/decoracion/20190719146129/rihanna-alquila-su-mansion-californiana/0-703-190/casa-rihanna-1a-a.jpg"

};
const departamento6 = {
    livingPlace: "Departamento",
    tipoDeOperacion: "Alquiler",
    direccion: "3 de febrero 2000",
    ubicacion: "Belgrano",
    ambientes: 3,
    superficie: 50,
    price: 720000,
    toilet: 1,
    cocheras: 1,
    descripcion: "Departamento de 3 ambientes con balcón. Toilette. Cocina independiente. 2 dormitorios. Baño completo. Espacio de guardado. Las unidades funcionales estarán preparadas para la instalación de aire acondicionado.",
    imageUrl: "https://mapaprop-image.s3.amazonaws.com/photos/3272/196542/1998005.jpg"

};
const departamento7 = {
    livingPlace: "Departamento",
    tipoDeOperacion: "Alquiler",
    direccion: "Bulnes 7200",
    ubicacion: "Palermo",
    ambientes: 2,
    superficie: 50,
    price: 650000,
    toilet: 1,
    cocheras: 0,
    descripcion: "Espectacular ubicación en zona residencial frente a las 10 grandes hectáreas verdes. Gran vista panorámica.",
    imageUrl: "https://imgar.zonapropcdn.com/avisos/resize/1/00/45/84/06/43/1200x1200/1752666583.jpg"

};
const departamento8 = {
    livingPlace: "Departamento",
    tipoDeOperacion: "Venta",
    direccion: "Alvear 505",
    ubicacion: "San martin",
    ambientes: 3,
    superficie: 50,
    price: 15000,
    toilet: 2,
    cocheras: 1,
    descripcion: ": Todos los ambientes son muy amplios y luminosos, pisos de parquet en los principales y mosaico en pasillo y cocina.",
    imageUrl: "https://imgar.zonapropcdn.com/avisos/1/00/47/15/89/46/1200x1200/1750576870.jpg"

};


Propiedades.insertMany([departamento1, departamento2, departamento3, departamento4, departamento5, departamento6, departamento7, departamento8])
    .then(() => {
        console.log('seedeada rey propiedades')
        process.exit();
    });
