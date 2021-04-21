import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import estilo from './propiedadesAll.module.css'
import Navbar from '../navbar/Navbar'
//-------------------material ui-------------------------------------
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../card/cardStyle'

const Propiedades = () => {
    const [propiedades, setPropiedades] = useState([])
    const [zona, setZona] = useState('')
    const [menorPrecio, setMenorPrecio] = useState('')
    const [mayorPrecio, setMayorPrecio] = useState('')
    const [tipoDeOperacion, setTipoDeOperacion] = useState('')
    const classes = useStyles()
    let msg
    useEffect(() => {
        axios.get('http://localhost:3009/api/propiedades')
            .then((x) => {
                setPropiedades(x.data);
            })
    }, [])
    const reset = () => {
        axios.get('http://localhost:3009/api/propiedades')
            .then((x) => {
                setPropiedades(x.data);
            })
    }
    const handleChangeTipoDeOperacion = (e) => {
        setTipoDeOperacion(e.target.value)
    }
    const handleSubmitOperacion = (e) => {
        e.preventDefault()
        filtroOperacion()
    }

    const handleChangeZona = (e) => {
        setZona(e.target.value)
    }
    const handleSubmitZona = (e) => {
        e.preventDefault()
        filtrarZona()
    }

    const handleChangeMenorPrecio = (e) => {
        setMenorPrecio(parseInt(e.target.value))

    }
    const handleSubmitMenorPrecio = (e) => {
        e.preventDefault()
        filtrarMenorPrecio()
    }


    const handleChangeMayorPrecio = (e) => {
        setMayorPrecio(e.target.value)
    }
    const handleSubmitMayorPrecio = (e) => {
        e.preventDefault()
        filtrarMayorPrecio()
    }

    const filtrarZona = () => {
        axios.post('http://localhost:3009/api/propiedades/zona', { "zona": zona })
            .then((x) => {
                console.log(x)
                setPropiedades(x.data)
            })
    }
    const filtrarMenorPrecio = () => {
        axios.post('http://localhost:3009/api/propiedades/preciomenor', { "precio": menorPrecio })
            .then((x) => {
                setPropiedades(x.data)
            })
    }

    const filtrarMayorPrecio = () => {
        axios.post("http://localhost:3009/api/propiedades/preciomayor", { "precio": mayorPrecio })
            .then((x) => {
                setPropiedades(x.data)
            })
    }
    const filtroOperacion = () => {
        axios.post("http://localhost:3009/api/propiedades/operacion", { "operacion": tipoDeOperacion })
            .then((x) => {
                setPropiedades(x.data)
            })
    }

    return (

        < div >
            {console.log(tipoDeOperacion)}
            <Navbar />
            <header>
                <div className={estilo.containerFlex} >
                    <Button onClick={reset} className={estilo.boton}>
                        Reset
                    </Button>
                    <form action="" onSubmit={handleSubmitZona} className={estilo.formZone}>
                        <div>
                            <label htmlFor="zona">
                                <div>zona</div>
                                <input onChange={handleChangeZona} type="text" name='zona' />
                            </label>
                            <Button onSubmit={handleSubmitZona} type="submit" className={estilo.boton}>
                                Filtrar
                        </Button>
                        </div>
                    </form>
                    <div>
                        <form action="" onSubmit={handleSubmitMenorPrecio}>
                            <label htmlFor="">
                                <div>Precio hasta</div>
                                <input onChange={handleChangeMenorPrecio} type="text" />
                            </label>
                            <Button type="submit" className={estilo.boton}>
                                Filtrar
                        </Button>
                        </form>
                    </div>
                    <div>
                        <form action="" onSubmit={handleSubmitMayorPrecio}>
                            <label htmlFor="">
                                <div>Desde precio</div>
                                <input type="text" onChange={handleChangeMayorPrecio} />
                            </label>
                            <Button type="submit" className={estilo.boton}>
                                Filtrar
                        </Button>
                        </form>
                    </div>
                    <div>
                        <form action="" onSubmit={handleSubmitOperacion}>
                            <label htmlFor="propiedades">
                                <div> Seleccione tipo de propiedad</div>
                                <input list='propiedades' onChange={handleChangeTipoDeOperacion} />
                                <datalist id='propiedades'>
                                    <option value="Alquiler">Alquiler</option>
                                    <option value="Venta">Venta</option>
                                </datalist>
                            </label>
                            <Button onSubmit={handleSubmitMenorPrecio} type="submit" className={estilo.boton}>
                                Filtrar
                        </Button>
                        </form>

                    </div>
                </div>
                <div>

                </div>
            </header>

            <div>

                <div className={estilo.fle}>
                    <div className={estilo.gridContainer}>
                        {
                            propiedades.length > 0 &&
                            propiedades.map(propiedad => {
                                return (
                                    <Card className={classes.root}>
                                        <CardActionArea>
                                            <CardMedia

                                                className={classes.media}
                                                image={propiedad.imageUrl}
                                                title="Contemplative Reptile" />

                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {propiedad.direccion}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    Descripcion :{propiedad.direccion}
                                                </Typography>
                                                <Box fontWeight="fontWeightBold" m={4}>
                                                    price: {propiedad.price}
                                                    <p>Ubicacion :{propiedad.ubicacion}</p>
                                                    <p>Tipo de operacion: {propiedad.tipoDeOperacion}</p>
                                                </Box>
                                                <Button>
                                                    <Link to={`/propiedad/${propiedad._id}`} className={estilo.link}> Ver mas</Link>
                                                </Button>
                                                <Button>
                                                    ❤️
                                                </Button>

                                            </CardContent>
                                        </CardActionArea>
                                    </Card>

                                )
                            })
                        }
                    </div>

                </div >

            </div>

        </div >


    )
}



export default Propiedades










