const express = require('express')
const router = express.Router()
const categoriaController = require('../controllers/categoria')
const Categoria = require('../models/categoria')

//router.get('/categoriaId', categoriaController.findOne)
router.get('/:categoriaId', (req, res) => {
    console.log(req.params);
    Categoria.findById({ _id: req.params.categoriaId })

        .then((cat) => {
            res.send(cat)
        })
        .catch((err) => res.send(err))

})
router.get('/', categoriaController.findAll) // funciona
router.post('/', categoriaController.CreateCategory) // funciona
router.put('/:categoriaId', categoriaController.updateCategory)
router.delete('/:categoriaId', categoriaController.deleteCategory)

module.exports = router