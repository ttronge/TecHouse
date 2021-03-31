const express = require('express')
const router = express.Router()
const userControl = require('../controllers/auth')

router.post('/', userControl.singUp)


module.exports = router