import React from 'react';
import NavbarCss from './navbar.module.css'
import { Link } from 'react-router-dom'
import Register from '../Register/register'
import axios from 'axios'
//import logo from '../../assets/logo'

const Navbar = () => {

    const cerrarSesion = () => {
        axios.post('http://localhost:3009/api/logout',
            { withCredentials: true })
            .then((x) => {
                console.log(x)

            })
            .catch((err) => console.log(err))
    }




    return (

        < div >
            <div className={NavbarCss.body}>


                <nav>
                    <div className={NavbarCss.menuIcon} ><span className="fas fa-bars" ></span></div>
                    <div ><img className={NavbarCss.imagenIcono} src="https://images.vexels.com/media/users/3/127772/isolated/preview/ce0eaed4069f2b190e580759fcc98662-icono-de-bienes-ra-iacute-ces-casa-delantera-by-vexels.png" alt="" /></div>
                    <div className={NavbarCss.navitems}>
                        <li>
                            <Link to='/' className={NavbarCss.link}>Comprar</Link>
                        </li>
                        <li>
                            <Link to='/' className={NavbarCss.link}>Alquilar</Link>
                        </li>
                        <li>
                            <Link to='/registro' className={NavbarCss.link}>Registrarse</Link>

                        </li>
                        <li>
                            <Link to='/singin' className={NavbarCss.link}>Login</Link>
                        </li>
                        <li>
                            <Link to='/' className={NavbarCss.link} onClick={cerrarSesion}>cerrar sesion</Link>
                        </li>

                    </div>
                    <div className={NavbarCss.searchIcon}><span className="fas fa-search"></span></div>
                    <div className={NavbarCss.cancelIcon}><span className="fas fa-times"></span></div>
                    <form action="#">
                        <input type="search" className={NavbarCss.buscador} placeholder='Buscar...' required />
                        <button type='submit' className='fas fa-search'></button>
                    </form>
                </nav>
            </div>

        </div>

    )
}
export default Navbar
