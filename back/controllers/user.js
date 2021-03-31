const { Users, Propiedades } = require('../models/index')
const mongoose = require('mongoose')
const userController = {
    findAll(req, res) {
        Users.find({})
            .then(users => {
                res.send(users)
            })
            .catch(err => {
                res.status(404).send(err)
            })
    },

    findAnUser(req, res) {
        Users.findById(req.params.userId)
            .then((userFind) => {
                res.json(userFind)
            }).
            catch((error) => {
                res.send(error)
            })
    },
    createUser(req, res) {
        Users.create(req.body)
            .then(() => {
                res.send('user created')
            })
            .catch((error) => res.send(error))

    },
    deleteUser(req, res) {
        Users.findByIdAndRemove({ _id: req.params.userId })

            .then((x) => {
                res.send('User eliminado')
            })
            .catch((error) => res.send(error))
    },
    editUser(req, res) {
        Users.findByIdAndUpdate({ _id: req.params.userId }, req.body)
            .then(() => {
                Users.findOne({ _id: req.params.userId })
                    .then((updateUser) => {
                        res.send(updateUser)
                    })
                    .catch((error) => res.send(error))
            })
    },

}
module.exports = userController