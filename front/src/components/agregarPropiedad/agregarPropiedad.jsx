import React, { useState } from 'react'
import axios from 'axios'
import Navbar from '../navbar/Navbar'
import estilo from './agregar.module.css'
import { Button } from '@material-ui/core'

const AgregarPropiedad = () => {
    const [livingPlace, settipoPropiedad] = useState('')
    const [tipoDeOperacion, setTipoDeOperacion] = useState('')
    const [direccion, setDireccion] = useState('')
    const [ubicacion, setUbicacion] = useState('')
    const [ambientes, setAmbientes] = useState(0)
    const [superficie, setSuperficie] = useState(0)
    const [price, setPrecio] = useState(0)
    const [toilet, setToilet] = useState(0)
    const [cocheras, setCocheras] = useState(0)
    const [descripcion, setDescripcion] = useState('')
    const [imageUrl, setImagenUrl] = useState('')
    const [mensajeCreacion, setMensajeCreacion] = useState('')
    const [habilitadoBoton, setHabilitadoBoton] = useState(false)

    const handleChangtipoPropiedad = (e) => {
        settipoPropiedad(e.target.value)

    }
    const handleChangeTipoDeOperacion = (e) => {
        setTipoDeOperacion(e.target.value)
    }

    const handleChangeDireccion = (e) => {
        setDireccion(e.target.value)
    }

    const handleChangeUbiacion = (e) => {
        setUbicacion(e.target.value)
    }
    const handleChangeAmbientes = (e) => {
        setAmbientes(parseInt(e.target.value))
    }
    const handleChangeSuperficie = (e) => {
        setSuperficie(parseInt(e.target.value))
    }
    const handleChangePrecio = (e) => {
        setPrecio(parseInt(e.target.value))
    }
    const handleChangeToilet = (e) => {
        setToilet(parseInt(e.target.value))
    }
    const handleChangeCochera = (e) => {
        setCocheras(parseInt(e.target.value))
    }
    const handleChangeDescripcion = (e) => {
        setDescripcion(e.target.value)
    }
    const handleChangeImagenUrl = (e) => {
        setImagenUrl(e.target.value)

    }


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3009/api/propiedades', { livingPlace, tipoDeOperacion, direccion, ubicacion, ambientes, superficie, price, toilet, cocheras, descripcion, imageUrl })
            .then((x) => {
                setMensajeCreacion(x.data)
            })

    }


    return (

        < div >

            {
                console.log(direccion)
            }
            < Navbar />
            <h1>Agregar Propiedad</h1>
            <div className={estilo.centrado}>
                <div className={estilo.container}>

                    <form onSubmit={handleSubmit}>

                        <div className={estilo.divs}>
                            <label htmlFor="propiedades">
                                <span className={estilo.bloque}>Seleccione tipo de propiedad</span>
                                <input onChange={handleChangtipoPropiedad} list='propiedades' />
                                <datalist id='propiedades'>
                                    <option value="Casa">Casa</option>
                                    <option value="Departamento">Departamento</option>
                                </datalist>
                            </label>
                            <label htmlFor="tipoDeOperacion">
                                <span className={estilo.bloque}>Seleccione tipo de operacion</span>
                                <input onChange={handleChangeTipoDeOperacion} list='tipoDeOperacion' />
                                <datalist id='tipoDeOperacion'>
                                    <option value="Venta">Venta</option>
                                    <option value="Alquiler">Alquiler</option>
                                </datalist>
                            </label>
                        </div>
                        <div className={estilo.divs}>
                            <label htmlFor="direccion">
                                <span className={estilo.bloque}>Direccion</span>
                                <input type="text" name="direccion" onChange={handleChangeDireccion} />
                            </label>
                            <label htmlFor="Ubicacion">
                                <span className={estilo.bloque}>Ubicacion</span>
                                <input type="text" name="Ubicacion" onChange={handleChangeUbiacion} />
                            </label>
                        </div>
                        <div className={estilo.divs}>
                            <label htmlFor="ambientes">
                                <span className={estilo.bloque}>Ambientes</span>
                                <input type="text" name="ambientes" onChange={handleChangeAmbientes} />
                            </label>
                            <label htmlFor="superficie">
                                <span className={estilo.bloque}>Superficie en m2</span>
                                <input type="text" name="superficie" onChange={handleChangeSuperficie} />
                            </label>
                        </div>
                        <div className={estilo.divs}>
                            <label htmlFor="precio">
                                <span className={estilo.bloque}>Precio</span>
                                <input type="text" name="precio" onChange={handleChangePrecio} />
                            </label>
                            <label htmlFor="toilet">
                                <span className={estilo.bloque}>Cantidad de baños</span>
                                <input type="text" name="toilet" onChange={handleChangeToilet} />
                            </label>
                        </div>
                        <div className={estilo.divs}>
                            <label htmlFor="cocheras">
                                <span className={estilo.bloque}>Cantidad de Cocheras</span>
                                <input type="text" name="cocheras" onChange={handleChangeCochera} />
                            </label>

                            <label htmlFor="ImageUrl">
                                <span className={estilo.bloque}>ImageUrl</span>
                                <input type="text" name="ImageUrl" onChange={handleChangeImagenUrl} />
                            </label>
                        </div>
                        <div className={estilo.text}>
                            <label htmlFor="Descripcion">
                                <span className={estilo.bloqued}>Descripcion</span>
                                <textarea type="text" name="Descripcion" onChange={handleChangeDescripcion} />
                            </label>
                        </div>



                        <div className={estilo.abajoDeForm}>

                            <div className={estilo.botonEnviar}>

                                <Button disabled={habilitadoBoton} className={estilo.botonPiola} type='submit' >Enviar</Button>
                                {mensajeCreacion ? <p className={estilo.bloque}>{mensajeCreacion}</p> : null}
                            </div>
                        </div>


                    </form>
                </div>
            </div>

        </div >
    )
}

export default AgregarPropiedad



