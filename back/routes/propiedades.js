const express = require('express')
const router = express.Router()
const propiedadesController = require('../controllers/propiedades')


router.get('/:propiedadId', propiedadesController.findAnProperties)
router.get('/', propiedadesController.findAll)
router.post('/', propiedadesController.createProperty)
router.delete('/:propiedadId', propiedadesController.deleteProperty)
router.put('/:propiedadId', propiedadesController.editProperty)
router.post('/zona', propiedadesController.filtroDeZona)
router.post('/preciomenor', propiedadesController.filtroDePrecioMenor)
router.post('/preciomayor', propiedadesController.filtroDePrecioMayor)
router.post('/entreprecios', propiedadesController.filtroEntrePrecios)





module.exports = router