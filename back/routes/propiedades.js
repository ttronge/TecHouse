const express = require('express')
const router = express.Router()
const Propiedades = require('../models/propiedades')
const propiedadesController = require('../controllers/propiedades')

router.get('/:propiedadId', propiedadesController.findAnProperties)
router.get('/', propiedadesController.findAll)
router.post('/', (req, res) => {
    Propiedades.create(req.body)
        .then(() => {
            res.send('Creado')
        })
        .catch((error) => res.send(error))
})

module.exports = router