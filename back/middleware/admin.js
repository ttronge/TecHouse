const { Users } = require('../models/index')

const checkAdmin = (req, res, next) => {
    Users.findByPk(req.params.id)
        .then(data => data.admin ? next() : res.sendStatus(401))
}

module.exports = checkAdmin;