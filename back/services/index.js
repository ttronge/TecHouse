`use strict`

const jwt = require('jwt-simple')
const moment = require('moment')
const confif = require('../config')

function createToken(user) {
    const payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(120, 'minutes').unix(),
        admin: user.admin // if there is an error this is 

    }
    // console.log(payload.admin);
    return jwt.encode(payload, confif.SECRET_TOKEN) // cripto the code 
}
function decodeToken(token) {
    const decoded = new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, confif.SECRET_TOKEN)
            if (payload.exp <= moment().unix()) {
                reject({
                    status: 401,
                    message: 'el token ha expirado'
                })
            }
            resolve(payload.sub)

        } catch (err) {
            reject({
                status: 500,
                message: 'invalid'
            })
        }
    })
    return decoded
}

module.exports = { createToken, decodeToken }