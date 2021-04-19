const mongoose = require('mongoose')
const { Schema } = mongoose;
const propiedadesSchema = new Schema({
    livingPlace: {
        type: String,
        required: true
    },
    tipoDeOperacion: {
        type: String,
        require: true
    },
    direccion: {
        type: String,
        required: true,
    },

    ubicacion: {
        type: String,
        require: true
    },
    ambientes: {
        type: Number,
        require: true
    },
    superficie: {
        type: Number,
        require: true
    },

    price: {
        type: Number,
        required: true,
    },
    toilet: {
        type: Number,
        require: true
    },
    cocheras: {
        type: Number,
        require: true
    },
    imageUrl: {
        type: String,
        required: true,
    },

    available: {
        type: Boolean,
        default: true,
    },

    /*    propietario: {
           type: Schema.Types.ObjectId,
           ref: "user"
       }, */

})
const Propiedades = mongoose.model('propiedades', propiedadesSchema)

module.exports = Propiedades

/*
nombre: direccion de la propiedad (ej: Castillo 1332)
descripcion: descripción de la propiedad
precio: precio del inmueble
ubicacion: barrio del inmueble
imagen: url de la imagen (solo 1)
disponible: booleano, por default: true
*/