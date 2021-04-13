const Favoritos = require('../models/favoritos')

const favoritosController = {
    verTodos(req, res) {
        Favoritos.find({})
            .then((favoritos) => {
                res.send(favoritos)
            })
    }
}
module.exports = favoritosController