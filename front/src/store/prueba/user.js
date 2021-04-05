
import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import axios from "axios"

// First, create the thunk
export const sendRegisterRequest = createAsyncThunk('USER_REGISTER_REQUEST', (newUser, thunkAPI) => {
    return axios
        .post("http://localhost:3009/api/singup")
    //.then({})
})
const userReducer = createReducer(sendRegisterRequest, {
    [sendRegisterRequest.fulfilled]: (state, action) => action.payload,
})



export default userReducer
















/*import { createAction, createReducer } from '@reduxjs/toolkit'

export const addUser = createAction("ADD_USER")
export const clearUser = createAction("CLEAR_USER")

const userReducer = createReducer([], {
    [addUser]: function (state, action) {
        state.push(action.payload)
    },
    [clearUser]: function (state, action) {
        return []
    }
})

export default userReducer
*/