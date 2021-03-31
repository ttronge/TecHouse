const express = require('express')
const router = express.Router()
const propiedadesController = require('../controllers/propiedades')
const auth = require('../middleware/auth')
const userControl = require('../controllers/auth')

router.get('/:propiedadId', propiedadesController.findAnProperties)
router.get('/', propiedadesController.findAll)
router.post('/', auth.isAuth, propiedadesController.createProperty)
router.delete('/:propiedadId', auth.isAuth, propiedadesController.deleteProperty)
router.put('/:propiedadId', auth.isAuth, propiedadesController.editProperty)



/* router.get('/', (req, res) => {
    Propiedades.find({}, function (err, propiedades) {
        Users.populate(propiedades, { path: "user" }, function (err, propiedades) {
            console.log(propiedades)
            res.status(200).send(propiedades)
        });

    });
}) */




module.exports = router