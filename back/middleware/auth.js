`use strict`
const service = require('../services')

const middle = {
    isAuth(req, res, next) {

        if (!req.headers.authorization) {
            console.log('no entro por esto', req.headers);
            return res.status(403).send('no tienes autorizacion')
        }
        const token = req.headers.authorization.split(" ")[1] // el 0 es la palabra Bearer y el 1 es todo el codigo 

        service.decodeToken(token)
            .then((response) => {
                req.user = response
                next()
            })
            .catch((response) => {
                res.status(response.status)
            })
    }
}


module.exports = middle
