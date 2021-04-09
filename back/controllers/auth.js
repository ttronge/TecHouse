`use strict`
const mongoose = require('mongoose')
const User = require('../models/users')
const bcrypt = require('bcrypt')
const config = require('../config')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const { SECRET_TOKEN } = require('../config')

const authController = {
    async singUp(req, res) {

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
        if (((req.body.password).length < 6)) {
            return res.status(500).send({
                message: `error al crear user`
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hasheoPassword = await bcrypt.hash(req.body.password, salt)

        const user = new User({
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hasheoPassword
        })
        const result = await user.save()
        const { password, ...data } = await result.toJSON()
        res.send(data)


    },
    async singIn(req, res) {

        const user = await User.findOne(
            { email: req.body.email }
        )
        if (!user) {
            return res.status(404).send({
                message: "usuario no encontrado"
            })
        }
        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) {

            return res.status(400).send({
                message: "credenciales invalidas"
            })
        }

        const token = jwt.sign({ _id: user._id }, SECRET_TOKEN)
        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        })

        res.send({
            message: "succes"
        })


    },
    async cookie(req, res) { // autenticacion del usuario
        try {

            const cookie = req.cookies['jwt']

            const verification = jwt.verify(cookie, SECRET_TOKEN)

            if (!verification) {
                return res.status(401).send({
                    message: "unauthenticated"
                })
            }
            const user = await User.findOne({ _id: verification._id })


            const { password, ...data } = await user.toJSON()



            res.send(data)

        } catch (e) {
            res.status(401).send({
                message: "hay un error"


            })
        }
    }
    ,
    async logout(req, res) {
        try {
            res.clearCookie('jwt', { domain: "http://localhost:3000/", path: "/" })
            console.log(req.cookies['jwt']);

        }
        catch {
            res.send({
                message: "Error"
            })
        }
    }



}
module.exports = authController


/*  User.findOne({ email: req.body.emai }, (err, user) => {
     if (err) res.status(500).send('error en singIn', err)
     if (!user) res.status(404).send('no existe user')

     req.user = user
     res.status(200).send({
         message: 'te has logueado correctamente ',
         token: service.createToken(user)
     }
     )
 })
     .catch(err => res.send(err))
} */