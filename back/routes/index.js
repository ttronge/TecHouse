const express = require('express')
const router = express.Router()

const users = require('./users')
const categoria = require('./categoria')
const propiedades = require('./propiedades')
const singin = require('./singIn')
const singup = require('./singup')
const private = require('./private')
const cookie = require('./cookie')
const logout = require('./logout')
const favoritos = require('./favoritos')



router.use('/propiedades', propiedades)
router.use('/categoria', categoria)
router.use('/users', users)
router.use('/singin', singin) // logueo
router.use('/singup', singup) // registro 
router.use('/private', private)
router.use('/cookie', cookie)
router.use('/logout', logout)
router.use('/favoritos', favoritos)
//router.use('/registro', MejorandoRegisterR)







module.exports = router
//-----------------------------------------


/* router.get('/private', auth.isAuth, function (req, res) {
    res.status(200).send('entraste GOD')
}) */
/* router.post('/singup', userControl.singUp)
router.post('/singin', userControl.singIn) */




// mica 6061fe3771a6b7532f2dd3b7
//const idTomi = 605df341fab74f5f33761a96
//propiedad  6061ebabc6b92a3ce05cb361

// ------------------------- edita propiedades y pone a un user la propiedad ------------------




/* router.post('/tomi/:id', (req, res) => {
    Propiedad.findById(req.params.id)
        .then((propiedadEcontrada) => {
            Users.findOne({ _id: '605df341fab74f5f33761a96' })
                .then((userFoun) => {
                          console.log(propietario);
                    propiedadEcontrada.propietario = userFoun
                    propiedadEcontrada.save()
                    res.send('funciono ')
                })
        })

}) */