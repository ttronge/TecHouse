import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../navbar/Navbar'
import estilos from './singleProperty.module.css'
import Button from '@material-ui/core/Button';


const SingleProperty = ({ propiedad }) => {

    const [propiedadUnica, setPropiedadUnica] = useState([])
    const [favoritosDeUser, setFavoritosDeUser] = useState([])
    const [mensajeFav, setMensajeFav] = useState('')
    const [favoritos, setFavoritos] = useState([])
    const [errorMensaje, setErrorMensaje] = useState('')
    const [elimado, setElimando] = useState('')
    const [redireccion, setRedireccion] = useState(false)
    const local = localStorage.getItem('user')
    const dataFinal = JSON.parse(local)


    useEffect(() => {
        axios.get(`http://localhost:3009/api/propiedades/${propiedad}`)
            .then((x) => {
                setPropiedadUnica(x.data)
            })
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:3009/api/users/favorite/${dataFinal._id}`)
            .then((x) => {
                setFavoritosDeUser(x.data)
            })
    }, [])

    console.log("----------------------------->", favoritosDeUser);
    const EliminarPropiedad = () => {
        axios.delete(`http://localhost:3009/api/propiedades/${propiedadUnica._id}`)
            .then((x) => {
                setElimando(x.data)
                setRedireccion(true)
                alert('Se ha eliminado correctamente')
            })
    }

    const addFav = () => {
        if (dataFinal) {
            axios.post(`http://localhost:3009/api/users/favorite/${dataFinal._id}`, { "propiedadId": propiedadUnica._id })
                .then((x) => {


                    setMensajeFav(x.data.message)
                    setFavoritos(x.data.depto.favoritos)

                })
        }
        else {
            setErrorMensaje('Debe iniciar sesion para hacer esta acción');

        }
    }


    let menu
    if (dataFinal.admin === true) {
        menu = (
            <Button onClick={EliminarPropiedad} >Eliminar Propiedad </Button>
        )
    }
    if (redireccion) {
        return <Redirect to='/propiedades' />;
    }

    return (

        <div>
            <Navbar />
            <div className={estilos.container}>

                <img className={estilos.imagen} src={propiedadUnica.imageUrl} alt="" />
            </div>
            <div className={estilos.textos}>
                <p>Ubicacion: {propiedadUnica.location}</p>
                <p>Tipo de localidad: {propiedadUnica.livingPlace}</p>
                <p>Direccion: {propiedadUnica.direccion}</p>
                <p>Precio: {propiedadUnica.price}</p>
                {<Button onClick={addFav} disabled={dataFinal.favoritos.includes(propiedadUnica._id)}>
                    añadir a favoritos  ❤️
                </Button>}
                {mensajeFav ? <p>{mensajeFav}</p> : <p> {errorMensaje} </p>}
                {menu}
                {/*  {dataFinal.admin ? <Button onClick={EliminarPropiedad} >Eliminar Propiedad </Button> : null} */}
            </div>



        </div >
    )
}
export default SingleProperty