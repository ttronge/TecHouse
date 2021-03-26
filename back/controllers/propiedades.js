const { Propiedades } = require('../models/index')

const propiedadesController = {
    findAll(req, res) {
        Propiedades.find({})
            .then(propiedad => {
                res.send(propiedad)
            })
            .catch(err => {
                res.status(404).send(err)
            })
    },

    findAnProperties(req, res) {
        Propiedades.findById(req.params.propiedadId)
            .then((propiedad) => {
                res.json(propiedad)
            }).
            catch((error) => {
                console.log('rey hay un error');
                res.send(error)
            })
    },
    createProperty(req, res) {
        Propiedades.create(req.body)
        console.log(req.body)
            .then(() => {
                res.send('Creado')
            })
            .catch((error) => res.send(error))
    },
}
module.exports = propiedadesController