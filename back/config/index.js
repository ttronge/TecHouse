const mongoose = require('mongoose')
const db = mongoose.connect("mongodb://localhost/propiedades", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(db => console.log('db conectada rey '))

module.exports = db