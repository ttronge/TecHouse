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
                res.send('Se ha creado correctamente')
            })
            .catch((error) => res.send('Error al crear propiedad'))
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
    filtroDeZona(req, res) {
        Propiedades.find({ ubicacion: req.body.zona })
            .then((x) => {
                res.send(x)
            })
            .catch((x) => {
                res.send({
                    message: "Ha ocurrido un problema " + x
                })
            })
    },
    filtroDePrecioMenor(req, res) {
        Propiedades.find({ "price": { "$lte": req.body.precio } })
            .then((x) => {
                res.send(x)
            })
            .catch((x) => {
                res.send({
                    message: "Ha ocurrido un problema " + x
                })
            })
    },
    filtroDePrecioMayor(req, res) {
        Propiedades.find({ "price": { "$gte": req.body.precio } })
            .then((x) => {
                res.send(x)
            })
            .catch((x) => {
                res.send({
                    message: "Ha ocurrido un problema " + x
                })
            })
    }


}



module.exports = propiedadesController