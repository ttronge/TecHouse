const { Users } = require('../models/index')

const userController = {
    findAll(req, res) {
        Users.find({})
            .then(users => {
                res.send(users)
            })
            .catch(err => {
                res.status(404).send(err)
            })
    },

    findAnUser(req, res) {
        Users.findById(req.params.userId)
            .then((userFind) => {
                res.json(userFind)
            }).
            catch((error) => {
                res.send(error)
            })
    },
    createUser(req, res) {
        Users.create(req.body)
            .then(() => {
                res.send('user created')
            })
            .catch((error) => res.send(error))
    },
}
module.exports = userController