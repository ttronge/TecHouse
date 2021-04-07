const mongoose = require('mongoose')
const { Schema } = mongoose;
const categoriasSchema = new Schema({
    tipo: {
        type: String
    },
})
const Categories = mongoose.model('categories', categoriasSchema)

module.exports = Categories