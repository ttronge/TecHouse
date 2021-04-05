import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import axios from 'axios'

/* import { register } from '../store/user' */

const Register = () => {
    const users = useSelector((state) => state.users)
    // para generar un cambio/accion tenemos dispach
    const dispatch = useDispatch()


    const [name, setName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [submit, setSubmit] = React.useState("")


    /* const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(register({
            name: name,
            lastName: lastName,
            email: email,
            password: password,
            loggin: true
        }))
    } */


    return (
        <div>
            <form /* onSubmit={(e) => handleSubmit(e)} */>
                <h1>registrate rey</h1>
                <input type="text"
                    placeholder='name'
                    name='name'
                    value={name}
                    onChange={((e) => setName(e.target.value))}
                />
                <input type="text"
                    placeholder='lastname'
                    name='lastname'
                    value={lastName}
                    onChange={((e) => setLastName(e.target.value))}
                />
                <input type="email"
                    name='email'
                    placeholder='email'
                    value={email}
                    onChange={((e) => setEmail(e.target.value))}
                />

                <input type='password'
                    name='password'
                    placeholder='password'
                    value={password}
                    onChange={((e) => setPassword(e.target.value))}
                />
                <button type="submit" >submit</button>
            </form>
        </div>


    )
}

export default Register