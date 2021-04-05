import React from "react";
import axios from 'axios'
import style from './register.module.css'
import Home from '../Home'
import { Link, Redirect, useHistory } from 'react-router-dom'


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const formValid = formErors => {
    let valid = true

    Object.values(formErors).forEach(val => {
        val.length > 0 && (valid = false)
    })
    return valid
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
            formErors: {
                firstName: "",
                lastNameError: "",
                emailEror: "",
                passwordError: ""
            }

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
        if (formValid(this.state.formErors)) {
            const { name, lastname, email, password } = this.state
            e.preventDefault();
            console.log(this.state);
            axios.post('http://localhost:3009/api/singup/', { name, lastname, email, password })
                //  .then(response => {
                //    console.log(response.data.token);
                .then(() => this.setState({ redirect: true }));
        }
        else {
            return console.log('algo anda mal ');
        }



    }


    handleChange = (e) => {
        const { name, lastname, email, password } = this.state
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
        /*         let formErors = this.state.formErors
                console.log("name ", e.target.name);
                console.log("value ", e.target.value);
                switch (e.target.name) {
                    case "name": {
                        formErors.firstName = name.length < 3 && name.length > 0 ? "el minimo de caracteres son 3 " : "";
                    }
                        break
                    case "lastname": {
                        formErors.lastName = lastname.length < 3 && lastname.length > 0 ? "el minimo de caracteres son 3 " : "";
                    }
                        break
                    case "email": {
                        formErors.email = validateEmail(email) < 3 && email.length > 0 ? "email invalido" : "";
                    }
                        break
                    case "password": {
                        formErors.password = password.length < 6 && password.length > 0 ? "el minimo de carecteres son 6" : "";
                    }
                }
                /*
                   firstName: "",
                        lastNameError: "",
                        emailEror: "",
                        passwordError: ""
                        */

        /*
                const { firstName, lastNameError, emailEror, passwordError } = this.state.formErors
                this.setState({ firstName })
                this.setState({ lastNameError })
                this.setState({ emailEror })
                this.setState({ passwordError })
                console.log(this.state);
            }
         */
    }
    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Home to='/' />;
        }

        return (
            <div className={style.wrapper} >
                <h1>Welcome to register </h1>
                <br />
                <div className={style.formWrapper}>
                    <form onSubmit={this.handleSubmit} className={style.formregister}>
                        <div className={style.firstName}>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name='name' onChange={this.handleChange} value={this.state.name} />

                        </div>
                        <div className={style.lastName}>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name='lastname' onChange={this.handleChange} value={this.state.lastname} />

                        </div>
                        <div className={style.email}>
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' onChange={this.handleChange} value={this.state.email} />

                        </div>
                        <div className={style.password}>
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' onChange={this.handleChange} value={this.state.password} />

                        </div>
                        <div className={style.createAccount}>
                            <button type="submit">Create Account</button>
                            <small>Already Have an Account?</small>
                        </div>
                    </form>
                </div>
            </div >

        )
    }
}

export default Register



/*   <div className={style.wrapper}>
      <div className={style.formWrapper}>
          Registration Form
      <form action="" onSubmit={this.handleSubmit}>
              <div className={style.wrapper}>
                  <div className={style.lastName}>
                      <label htmlFor="firstName">First Name</label>
                      <input type="text" name='name' onChange={this.handleChange} value={this.state.name} />
                  </div>
                  <div className={style.lastName}>
                      <label htmlFor="lastName">Last Name</label>
                      <input type="text" name='lastname' onChange={this.handleChange} value={this.state.lastname} />
                  </div>
                  <div className={style.lastName}>
                      <label htmlFor="email">Email</label>
                      <input type="email" name='email' onChange={this.handleChange} value={this.state.email} />
                  </div>
                  <div className={style.lastName}>
                      <label htmlFor="password">Password</label>
                      <input type="password" name='password' onChange={this.handleChange} value={this.state.password} />
                  </div>
                  <div className={style.createAccount}>
                      <button type="submit">Create Account</button>
                  </div>
              </div>
          </form>
      </div>
  </div> */