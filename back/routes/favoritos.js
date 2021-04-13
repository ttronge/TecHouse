const express = require('express')
const router = express.Router()
const favoritosController = require('../controllers/favoritos')
router.get('/', favoritosController.verTodos)


module.exports = router