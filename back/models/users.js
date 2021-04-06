const mongoose = require('mongoose')
const { Schema } = mongoose;
const { isEmail } = require('validator')
const bcrypt = require('bcrypt')
const userSchema = new Schema({
    name: {
        type: String,
        required: false,
        minlength: 3,
    },
    lastname: {
        type: String,
        required: true,
        minlength: 3
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
        minlength: 6,
    },
    admin: {
        type: Boolean,
        required: false,
        default: false
    }
    /*   propiedades: [{
          type: Schema.Types.ObjectId,
          ref: 'propiedades'
      }] */
})
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(16)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})




const User = mongoose.model('user', userSchema)

module.exports = User

