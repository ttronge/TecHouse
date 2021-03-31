`use strict`

const mongoose = require('mongoose')
const User = require('../models/users')
const service = require('../services')
const userControllers = require('./user')

const authController = {
    singUp(req, res) {       //registro
        User.create(req.body)
            .then((user) => {
                user.save(() => {
                    res.status(200).send({ token: service.createToken(user) })
                })
            })
            .catch((error) => res.status(500).send(`error al crear user${error}`))

    },
    singIn(req, res) {
        User.find({ email: req.body.email }, (err, user) => {
            if (err) res.status(500).send('error en singIn', err)
            if (!user) res.status(404).send('no existe user')

            req.user = user
            res.status(200).send({
                message: 'te has logueado correctamente ',
                token: service.createToken(user)
            }
            )
        })
            .catch(err => err)
    }
}
module.exports = authController