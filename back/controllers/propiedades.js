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
            .then(() => {
                res.send('Creado')
            })
            .catch((error) => res.send(error))
    },
    deleteProperty(req, res) {
        Propiedades.findByIdAndRemove({ _id: req.params.propiedadId })
            .then((x) => {
                res.send('eliminado')
            })
            .catch((error) => res.send(error))
    },
    editProperty(req, res) {
        Propiedades.findByIdAndUpdate({ _id: req.params.propiedadId }, req.body)
            .then(() => {
                Propiedades.findOne({ _id: req.params.propiedadId })
                    .then((x) => {
                        res.send(x)
                    })
                    .catch((error) => res.send(error))
            })

    },
    /*  addImage(req,res){
         Propiedades.
     } */

}



module.exports = propiedadesController