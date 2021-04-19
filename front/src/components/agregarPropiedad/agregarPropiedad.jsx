import React, { useState } from 'react'
import axios from 'axios'
import Navbar from '../navbar/Navbar'
import estilo from './agregar.module.css'
import { Button } from '@material-ui/core'

const AgregarPropiedad = () => {
    const [livingPlace, settipoPropiedad] = useState('')
    const [direccion, setDireccion] = useState('')
    const [price, setPrecio] = useState()
    const [imageUrl, setImagenUrl] = useState('')
    const [ubicacion, setUbicacion] = useState('')
    const [mensajeCreacion, setMensajeCreacion] = useState('')
    const [habilitadoBoton, setHabilitadoBoton] = useState(false)
    const habilitado = () => {

    }

    const handleChangtipoPropiedad = (e) => {
        settipoPropiedad(e.target.value)

    }

    const handleChangeDireccion = (e) => {
        setDireccion(e.target.value)

    }

    const handleChangePrecio = (e) => {
        setPrecio(parseInt(e.target.value))

    }

    const handleChangeImagenUrl = (e) => {
        setImagenUrl(e.target.value)

    }
    const handleChangeUbiacion = (e) => {
        setUbicacion(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3009/api/propiedades', { livingPlace, direccion, price, imageUrl, ubicacion })
            .then((x) => {
                setMensajeCreacion(x.data)
            })

    }


    return (

        < div >


            < Navbar />
            <h1>Agregar Propiedad</h1>
            <div className={estilo.centrado}>
                <div className={estilo.container}>

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">
                            <span className={estilo.bloque}>Seleccione tipo de propiedad</span>
                            <input onChange={handleChangtipoPropiedad} list='propiedades' />
                            <datalist id='propiedades'>
                                <option value="Casa">Casa</option>
                                <option value="Departamento">Departamento</option>
                            </datalist>
                        </label>
                        <label htmlFor="direccion">
                            <span className={estilo.bloque}>Direccion</span>
                            <input type="text" name="direccion" onChange={handleChangeDireccion} />
                        </label>
                        <label htmlFor="name">
                            <span className={estilo.bloque}>Precio</span>
                            <input type="text" name=" name" onChange={handleChangePrecio} />
                        </label>
                        <label htmlFor="name">
                            <span className={estilo.bloque}>ImageUrl</span>
                            <input type="text" name="name" onChange={handleChangeImagenUrl} />
                        </label>
                        <label htmlFor="name">
                            <span className={estilo.bloque}>Ubicacion</span>
                            <input type="text" name="name" onChange={handleChangeUbiacion} />
                        </label>
                        {mensajeCreacion ? <p>{mensajeCreacion}</p> : null}
                        <div className={estilo.botonEnviar}>

                            <Button disabled={habilitadoBoton} className={estilo.botonPiola} type='submit' >Enviar</Button>

                        </div>

                    </form>
                </div>
            </div>

        </div >
    )
}
export default AgregarPropiedad



