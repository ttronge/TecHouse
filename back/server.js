const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const routes = require('./routes/index')
const db = require('./config/index')
const User = require('./models/users')
const Propiedades = require('./models/propiedades')
const app = express()

app.use(morgan('dev'))
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}))
app.use(express.json())
app.use(cookieParser())

app.use('/api', routes)

app.use((error, req, res, next) => {
    res.sendStatus(404).send(error)
})


app.listen(3009, () => {
    console.log('run in port 3009');
})



















