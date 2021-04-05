import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import user from './prueba/user'

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        users: user
    }
})


export default store

// use selector me traigo la info de redux 
// persistencia con redux 

//actions: ejecuto cuando hay un cambio
// reducer: sabe como responder a esos actions
