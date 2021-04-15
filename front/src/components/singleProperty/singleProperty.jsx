import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../navbar/Navbar'
import estilos from './singleProperty.module.css'
import Button from '@material-ui/core/Button';
const SingleProperty = ({ propiedad }) => {
    console.log(propiedad);
    const [propiedadUnica, setPropiedadUnica] = useState([])
    const [mensajeFav, setMensajeFav] = useState('')
    const local = localStorage.getItem('user')
    const dataFinal = JSON.parse(local)
    console.log('carrrrd', dataFinal);
    console.log('soy propiedad uhucas', propiedadUnica);

    useEffect(() => {
        axios.get(`http://localhost:3009/api/propiedades/${propiedad}`)
            .then((x) => {
                setPropiedadUnica(x.data)
            })

    }, [])
    console.log(propiedadUnica)
    const addFav = () => {
        axios.post(`http://localhost:3009/api/users/favorite/${dataFinal._id}`, { "propiedadId": propiedadUnica._id })
            .then((x) => {

                setMensajeFav(x.data.message)
            })
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
                {<Button onClick={addFav}>
                    añadir a favoritos  ❤️
                </Button>}
                {mensajeFav ? <p>{mensajeFav}</p> : null}
            </div>



        </div>
    )
}
export default SingleProperty