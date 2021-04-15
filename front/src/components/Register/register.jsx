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
            habilitado: true,
            user: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.habilitadoo = this.habilitadoo.bind(this)
    }



    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        this.habilitadoo()

    }

    habilitadoo() {
        const { name, lastname, email, password, loading, erores, habilitado } = this.state
        if (!name || !lastname || !email || !password) {
            return this.setState({ habilitado: false })
        }
    }


    handleSubmit = (e) => {
        const { name, lastname, email, password, loading, erores, } = this.state
        e.preventDefault();
        this.habilitadoo()
        this.setState({ loading: true })
        axios.post('http://localhost:3009/api/singup/', { name, lastname, email, password }, { withCredentials: true })
            //  .then(response => {
            //    console.log(response.data.token);
            .then((x) => {
                console.log(x);
            })
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

    render() {

        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/singin' />
        }

        const { name, lastname, email, password, erores, habilitado } = this.state

        return (
            <div className={style.wrapper} >
                <h1>Completa con tus datos </h1>
                <br />
                <div className={style.formWrapper}>
                    <form onSubmit={this.handleSubmit}
                        className={style.formregister}
                    >
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
                                name='lastname'
                                onChange={this.handleChange}
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
                            <button type="submit"
                                disabled={habilitado}
                                className={habilitado ? "disabled" : "habilitado"}
                            >
                                Create Account
                            </button>
                            {this.state.loading ? <CircularProgress /> : null}

                            {<p className={style.pError}>  {erores} </p>}

                            <small>Already Have an Account?</small>
                        </div>
                    </form>
                </div>
            </div >

        )
    }
}

export default Register




