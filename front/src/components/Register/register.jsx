import React from "react";
import axios from 'axios'
import style from './register.module.css'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            lastname: '',
            email: '',
            password: '',
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
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:3009/api/singup/', this.state)
            .then(response => {
                console.log(response.data.token);
            })

    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state.lastName);
    }

    render() {
        return (

            <div className={style.wrapper}>
                <div className={style.title}>
                    Registration Form
    </div>
                <form action="" onSubmit={this.handleSubmit}>
                    <div className={style.inputfield}>
                        <label>First Name</label>
                        <input type="text" name='name' onChange={this.handleChange} value={this.state.name} />
                    </div>
                    <div className={style.inputfield}>
                        <label>Last Name</label>
                        <input type="text" name='lastname' onChange={this.handleChange} value={this.state.lastname} />
                    </div>
                    <div className={style.inputfield}>
                        <label>Emai name</label>
                        <input type="email" name='email' onChange={this.handleChange} value={this.state.email} />
                    </div>
                    <div className={style.inputfield}>
                        <label> Password</label>
                        <input type="password" name='password' onChange={this.handleChange} value={this.state.password} />
                    </div>
                    <div className={style.inputfield}>
                        <input type="submit" value="Register" className="btn" />
                    </div>
                </form>
            </div>


        )
    }
}
export default Register

