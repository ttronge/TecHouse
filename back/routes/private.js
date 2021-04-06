const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')



router.get('/', auth.isAuth, function (req, res) {
    res.status(200).send('entraste GOD')
})

module.exports = router