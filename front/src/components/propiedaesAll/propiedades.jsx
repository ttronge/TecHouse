import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../navbar/Navbar'

const Propiedades = () => {
    const [propiedades, setPropiedades] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3009/api/propiedades')
            .then((x) => {
                setPropiedades(x.data);
            })
    }, [])








    return (
        <div>
            <Navbar />
            <h1>Propiedades</h1>

        </div>
    )

}

export default Propiedades