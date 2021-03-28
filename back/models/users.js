const mongoose = require('mongoose')
const { Schema } = mongoose;
const { isEmail } = require('validator')
const bcrypt = require('bcrypt')
const jtw = require('jsonwebtoken')
const userSchema = new Schema({
    name: {
        type: String,
        required: false,
        minlength: 3,
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        validate: [isEmail, 'rey pone bien el email']
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'minimo 6 caracteres debe tener la contraseña'] // por si da error es esto 

    },
    admin: {
        type: Boolean
    },
    propiedades: [{
        type: Schema.Types.ObjectId,
        ref: 'propiedades'
    }]
})
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(16)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})




const User = mongoose.model('user', userSchema)

module.exports = User

