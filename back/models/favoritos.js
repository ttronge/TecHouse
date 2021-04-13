const mongoose = require('mongoose')
const { Schema } = mongoose;
const favoritosSchema = new Schema({
    persona: {
        type: String
    },
    departamento: {
        type: String
    },

})
const Favoritos = mongoose.model('favoritos', favoritosSchema)

module.exports = Favoritos