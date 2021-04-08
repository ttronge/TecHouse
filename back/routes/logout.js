const express = require("express")
const router = express.Router()
const authController = require('../controllers/auth')
router.post('/', authController.logout)

module.exports = router