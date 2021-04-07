const Categoria = require('../models/categoria')

const categoriaController = {
    findAll(req, res) {
        Categoria.find({})
            .then((categorias) => {
                res.send(categorias)
            })
            .catch((err) => res.send(err))
    },
    findOne(req, res) {
        Categoria.findById(req.params.categoriaId)
            .then((categoria) => {
                res.json(categoria)
            })
            .catch((err) => res.send('no se pudo rey'))
    },
    CreateCategory(req, res) {
        Categoria.create(req.body)
            .then(() => {
                res.send('creado')
            })
            .catch((err) => res.send(err))
    },
    deleteCategory(req, res) {
        Categoria.findByIdAndRemove({ _id: req.params.categoriaId })
            .then(() => {
                res.send('categoria eliminada')
            })
            .catch((err) => res.send(err))
    },
    updateCategory(req, res) {
        Categoria.findByIdAndUpdate({ _id: req.params.categoriaId }, req.body)
            .then(() => {
                Categoria.findOne({ _id: req.params.userId })
                    .then((cate) => {
                        res.send('done')
                    })


                    .catch((error) => res.send(error))
            })
    },

}
module.exports = categoriaController