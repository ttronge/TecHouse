const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')


router.get('/:userId', userController.findAnUser)
router.get('/', userController.findAll)

router.post('/', userController.createUser)

module.exports = router