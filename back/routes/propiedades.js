const express = require('express')
const router = express.Router()
const propiedadesController = require('../controllers/propiedades')
const auth = require('../middleware/auth')
const userControl = require('../controllers/auth')

router.get('/:propiedadId', propiedadesController.findAnProperties)
router.get('/', propiedadesController.findAll)
router.post('/', propiedadesController.createProperty)
router.delete('/:propiedadId', propiedadesController.deleteProperty)
router.put('/:propiedadId', propiedadesController.editProperty)
router.post('/zona', propiedadesController.filtroDeZona)
router.post('/preciomenor', propiedadesController.filtroDePrecioMenor)
router.post('/preciomayor', propiedadesController.filtroDePrecioMayor)
/* router.get('/', (req, res) => {
    Propiedades.find({}, function (err, propiedades) {
        Users.populate(propiedades, { path: "user" }, function (err, propiedades) {
            console.log(propiedades)
            res.status(200).send(propiedades)
        });

    });
}) */




module.exports = router