import React from 'react';
import NavbarCss from './navbar.module.css'
import { Link } from 'react-router-dom'


const Navbar = ({ name }) => {
    let menu
    const cerrarSesion = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('favoritos')
    }


    if (name === '') {
        menu = (
            <>
                <li>
                    <Link to='/registro' className={NavbarCss.link}>Registrarse</Link>
                </li>
                <li>
                    <Link to='/singin' className={NavbarCss.link}>SingIn</Link>
                </li>
                <li>
                    <Link to='/propiedades' className={NavbarCss.link}>Ver propiedades</Link>
                </li>
                <li>
                    <Link to='/' className={NavbarCss.link}>Alquilar</Link>
                </li>


            </>



        )
    } else {
        menu = (
            <>
                <li>
                    <Link to='/propiedades' className={NavbarCss.link}>Ver propiedades</Link>
                </li>
                <li>
                    <Link to='/agregar' className={NavbarCss.link}>Agregar propiedad</Link>
                </li>
                <li>
                    <Link to='/favoritos' className={NavbarCss.link}>Favoritos</Link>
                </li>
                <li>
                    <Link to='/' className={NavbarCss.link} onClick={cerrarSesion}>cerrar sesion</Link>
                </li>
            </>
        )
    }



    return (

        < div >
            <div className={NavbarCss.body}>


                <nav>
                    <div className={NavbarCss.menuIcon} ><span className="fas fa-bars" ></span></div>

                    <div className={NavbarCss.navitems}>
                        {menu}

                    </div>
                    <div > <Link to='/'><img className={NavbarCss.imagenIcono} src="https://images.vexels.com/media/users/3/127772/isolated/preview/ce0eaed4069f2b190e580759fcc98662-icono-de-bienes-ra-iacute-ces-casa-delantera-by-vexels.png" alt="" /></Link></div>

                </nav>
            </div>

        </div>

    )
}
export default Navbar
