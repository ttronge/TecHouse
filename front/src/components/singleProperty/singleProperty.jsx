import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
            <h1>Funciono</h1>
        </div>
    )
}
export default SingleProperty