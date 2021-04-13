import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../navbar/Navbar'
import estilos from './singleProperty.module.css'
const SingleProperty = ({ propiedad }) => {
    console.log(propiedad);
    const [propiedadUnica, setPropiedadUnica] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3009/api/propiedades/${propiedad}`)
            .then((x) => {
                setPropiedadUnica(x.data)
            })

    }, [])
    console.log(propiedadUnica)

    return (
        <div>
            <Navbar />
            <div className={estilos.container}>
                <div>
                    <img className={estilos.imagen} src={propiedadUnica.imageUrl} alt="" />
                </div>


                <p>Ubicacion: {propiedadUnica.location}</p>


            </div>
        </div>
    )
}
export default SingleProperty