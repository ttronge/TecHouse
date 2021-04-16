import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../navbar/Navbar'
import estilos from './singleProperty.module.css'
import Button from '@material-ui/core/Button';


const SingleProperty = ({ propiedad }) => {

    const [propiedadUnica, setPropiedadUnica] = useState([])
    const [mensajeFav, setMensajeFav] = useState('')
    const [favoritos, setFavoritos] = useState([])
    const [errorMensaje, setErrorMensaje] = useState('')
    const [habilitadoBoton, setHabilitadoBoton] = useState(false)
    const local = localStorage.getItem('user')
    const dataFinal = JSON.parse(local)


    useEffect(() => {
        axios.get(`http://localhost:3009/api/propiedades/${propiedad}`)
            .then((x) => {
                setPropiedadUnica(x.data)
            })
    }, [])




    const addFav = () => {
        if (dataFinal) {
            axios.post(`http://localhost:3009/api/users/favorite/${dataFinal._id}`, { "propiedadId": propiedadUnica._id })
                .then((x) => {
                    console.log(x);
                    setHabilitadoBoton(true)
                    setMensajeFav(x.data.message)
                    setFavoritos(x.data.depto.favoritos)

                })
        }
        else {
            setErrorMensaje('Debe iniciar sesion para hacer esta acción');
            setHabilitadoBoton(true)
        }
    }

    //  localStorage.setItem('favoritos', JSON.stringify(favoritos))
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
                {<Button onClick={addFav} disabled={habilitadoBoton}>
                    añadir a favoritos  ❤️
                </Button>}
                {mensajeFav ? <p>{mensajeFav}</p> : <p> {errorMensaje} </p>}
            </div>



        </div>
    )
}
export default SingleProperty