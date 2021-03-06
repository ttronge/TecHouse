const express = require('express')
const router = express.Router()
const propiedadesController = require('../controllers/propiedades')


router.get('/:propiedadId', propiedadesController.findAnProperties)
router.get('/', propiedadesController.findAll)
router.delete('/:propiedadId', propiedadesController.deleteProperty)
router.put('/:propiedadId', propiedadesController.editProperty)
router.post('/', propiedadesController.createProperty)
router.post('/zona', propiedadesController.filtroDeZona)
router.post('/preciomenor', propiedadesController.filtroDePrecioMenor)
router.post('/preciomayor', propiedadesController.filtroDePrecioMayor)
router.post('/entreprecios', propiedadesController.filtroEntrePrecios)
router.post('/operacion', propiedadesController.filtrosDeOperacion)
router.post('/ordenarmayoramenor', propiedadesController.ordenarMayorAMenor)
router.post('/ordenarmenoramayor', propiedadesController.ordenarDeMenoraMayor)



module.exports = router