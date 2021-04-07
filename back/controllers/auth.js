`use strict`

const mongoose = require('mongoose')
const User = require('../models/users')
const service = require('../services')
const userControllers = require('./user')

const authController = {
    singUp(req, res) {       //registro
        if ((req.body.name).length < 3) {
            return res.status(500).send({
                message: `nombre minmo debe tener 3 caractere`
            })
        }
        if ((req.body.lastname).length < 3) {
            return res.status(500).send({
                message: `apellido minimo debe tener 3 caracteres`
            })
        }
        if (!req.body.email) {
            return res.status(500).send({
                message: `error al enviar email`
            })
        }
        if (!((req.body.password).length < 6)) {
            return res.status(500).send({
                message: `error al crear user`
            })
        }

        User.create(req.body)
            .then((user) => {
                user.save(() => {
                    res.status(200).send({ token: service.createToken(user) })
                })
            })

            .catch(() => res.status(500).send({
                message: `error al crear usuario`
            }))


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