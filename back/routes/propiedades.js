const express = require('express')
const router = express.Router()
const propiedadesController = require('../controllers/propiedades')
const Propiedades = require('../models/propiedades')


router.get('/:propiedadId', propiedadesController.findAnProperties)
router.get('/', propiedadesController.findAll)
router.post('/', propiedadesController.createProperty)
router.delete('/:propiedadId', propiedadesController.deleteProperty)
router.put('/:propiedadId', propiedadesController.editProperty)



module.exports = router