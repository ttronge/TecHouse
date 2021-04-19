import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import estilo from './agregar.module.css'

const AgregarPropiedad = () => {
    const [tipoPropiedad, settipoPropiedad] = useState('')
    const [direccion, setDireccion] = useState('')
    const [precio, setPrecio] = useState('')
    const [imagenUrl, setImagenUrl] = useState('')
    const [ubicacion, setUbicacion] = useState('')


    const handleChangtipoPropiedad = (e) => {
        settipoPropiedad(e.target.value)
    }

    const handleChangeDireccion = (e) => {
        setDireccion(e.target.value)
    }

    const handleChangePrecio = (e) => {
        setPrecio(e.target.value)
    }

    const handleChangeImagenUrl = (e) => {
        setImagenUrl(e.target.value)
    }
    const handleChangeUbiacion = (e) => {
        setUbicacion(e.target.value)
    }




    return (
        <div>
            <Navbar />
            <h1>Agregar Propiedad</h1>
            <div className={estilo.centrado}>
                <div className={estilo.container}>

                    <form >
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
                            <input type="text" name="name" onChange={handleChangePrecio} />
                        </label>
                        <label htmlFor="name">
                            <span className={estilo.bloque}>ImageUrl</span>
                            <input type="text" name="name" onChange={handleChangeImagenUrl} />
                        </label>
                        <label htmlFor="name">
                            <span className={estilo.bloque}>Ubicacion</span>
                            <input type="text" name="name" onChange={handleChangeUbiacion} />
                        </label>
                        <div className={estilo.botonEnviar}>
                            <button className={estilo.bloque}>Submit</button>
                        </div>

                    </form>
                </div>
            </div>

        </div >
    )
}
export default AgregarPropiedad



