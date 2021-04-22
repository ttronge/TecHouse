const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')
const auth = require('../middleware/auth')

router.get('/:userId', userController.findAnUser)
router.get('/', userController.findAll)
router.delete('/:userId', auth.isAuth, userController.deleteUser)
router.put('/:userId', auth.isAuth, userController.editUser)
router.post('/favorite/:userId', userController.addFavorite)
router.get('/favorite/:userId', userController.getFavorite)
router.post('/favoriteDelete/:userId', userController.deleteFavorite)













module.exports = router