import React from "react";
import axios from 'axios'
import style from './register.module.css'
import Home from '../Home'
import { Link, Redirect, useHistory } from 'react-router-dom'

// meterial 
import { CircularProgress } from "@material-ui/core";
import ErrorIcon from '@material-ui/icons/Error';

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            lastname: '',
            email: '',
            password: '',
            redirect: false,
            loading: false,
            erores: "",
            habilitado: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.habilitado = this.habilitado.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:3009/api/propiedades')
            .then(res => res.data)
            .then((x) => console.log(x))
    }



    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state.lastName);
    }


    handleSubmit = (e) => {
        const { name, lastname, email, password, loading, erores, } = this.state
        e.preventDefault();
        this.setState({ loading: true })
        axios.post('http://localhost:3009/api/singup/', { name, lastname, email, password })
            //  .then(response => {
            //    console.log(response.data.token);
            .then(() => {
                return this.setState({ loading: true })
            })

            .then(() => {
                return this.setState({ redirect: true })
            })

            .catch((err) => {

                this.setState({ erores: err.response.data.message })
                this.setState({ loading: false })
                console.log(err)
            })
    }
    // si yo tengo el name, lastname , email y password  con un length > 0 la funcion tiene que dar false si no true


    handleChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })

    }

    habilitado() {
        const { name, lastname, email, password, loading, erores, } = this.state
        if ((!name && !lastname) && (!email && password)) {
            console.log('funciono rey')
            return this.setState({ habilitado: true })
        }
    }
    render() {

        const { redirect } = this.state;
        if (redirect) {
            return <Home to='/' />;
        }

        const { name, lastname, email, password, erores } = this.state

        return (
            <div className={style.wrapper} >
                <h1>Completa con tus datos </h1>
                <br />
                <div className={style.formWrapper}>
                    <form onSubmit={this.handleSubmit} className={style.formregister}>
                        <div className={style.firstName}>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text"
                                name='name'
                                onChange={this.handleChange}
                                value={this.state.name}
                            />
                            {(name.length < 3 && name.length > 0) && (
                                <span className={style.errorMessage}>El minimo de caracteres son 3</span>
                            )}
                        </div>
                        <div className={style.lastName}>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text"
                                name='lastname' onChange={this.handleChange}
                                value={this.state.lastname}
                            />
                            {(lastname.length < 3 && lastname.length > 0) && (
                                <span className={style.errorMessage}>El minimo de caracteres son 3</span>
                            )}
                        </div>
                        <div className={style.email}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name='email'
                                onChange={this.handleChange}
                                value={this.state.email}

                            />
                            {(!validateEmail(email) && email.length > 0) && (
                                <span className={style.errorMessage}>el email es incorretcto rey</span>
                            )}
                        </div>
                        <div className={style.password}>
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                name='password'
                                onChange={this.handleChange}
                                value={this.state.password}
                            />
                            {(password.length < 6 && password.length > 0) && (
                                <span className={style.errorMessage}>El minimo de caracteres son 6</span>
                            )}
                        </div>
                        <div className={style.createAccount}>
                            {/* 
                              en el estado creo una variable con true default 
                              update aca checkeo 
                             
                            
                            */}
                            <button type="submit" disabled={this.habilitado} >Create Account</button>
                            {
                                this.state.loading ? <CircularProgress /> : null
                            }

                            {
                                <p>  {erores} </p>
                            }

                            <small>Already Have an Account?</small>
                        </div>
                    </form>
                </div>
            </div >

        )
    }
}

export default Register




