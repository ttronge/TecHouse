const Users = require('../models/users')
require("../config/index");
const user1 = {
    name: "Olimpo",
    lastname: "Tronge",
    email: "oli@gmail.com",
    password: "123456",
    admin: false
}
const user2 = {
    name: "King",
    lastname: "dasa",
    email: "king@gmail.com",
    password: "123456",
    admin: false
}
const user3 = {
    name: "Mate",
    lastname: "Amargo",
    email: "mate@gmail.com",
    password: "123456",
    admin: false
}
const user4 = {
    name: "Dulce de leche",
    lastname: "Helado",
    email: "helado@gmail.com",
    password: "123456",
    admin: false
}

Users.insertMany([user1, user2, user3, user4])
    .then(() => {
        console.log('seedeada rey Usuarios')
        process.exit();
    })