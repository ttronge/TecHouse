import React from 'react';
import NavbarCss from './navbar.module.css'
import { Link } from 'react-router-dom'
import Register from '../Register/register'
//import logo from '../../assets/logo'
const Navbar = () => {
    const menuicon = document.getElementsByClassName('.menuIcon')
    console.log(menuicon);
    return (

        < div >
            <div className={NavbarCss.body}>


                <nav>
                    <div className={NavbarCss.menuIcon} ><span className="fas fa-bars" ></span></div>
                    <div className={NavbarCss.logo}>logo</div>
                    <div className={NavbarCss.navitems}>
                        <li>
                            <Link to='/' className={NavbarCss.link}>Comprar</Link>
                        </li>
                        <li>
                            <Link to='/' className={NavbarCss.link}>Alquilar</Link>
                        </li>
                        <li>
                            <Link to='/registro' className={NavbarCss.link}>Sing in</Link>

                        </li>
                        <li>
                            <Link to='/' className={NavbarCss.link}>algo</Link>
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