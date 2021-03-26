const express = require('express')
const router = express.Router()
const users = require('./users')
const categoria = require('./categoria')
const propiedades = require('./propiedades')


router.use('/propiedades', propiedades)
router.use('/categoria', categoria)
router.use('/users', users)



module.exports = router