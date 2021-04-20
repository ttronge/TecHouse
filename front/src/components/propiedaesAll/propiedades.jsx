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
import { Grid } from '@material-ui/core'
const Propiedades = () => {
    const [propiedades, setPropiedades] = useState([])
    const [zona, setZona] = useState('')
    const [menorPrecio, setMenorPrecio] = useState('')
    const [mayorPrecio, setMayorPrecio] = useState('')
    const [desde, setDesde] = useState('')
    const [hasta, setHasta] = useState('')
    const classes = useStyles()

    useEffect(() => {
        axios.get('http://localhost:3009/api/propiedades')
            .then((x) => {
                setPropiedades(x.data);
            })
    }, [])



    return (
        <div>
            <header>
                <Navbar />

                <div >
                    <form action="" className={estilo.filtros}  >
                        <label htmlFor="zona">
                            <div>zona</div>
                            <input type="text" name='zona' />
                        </label>
                        <label htmlFor="">
                            <div>Menor precio</div>
                            <input type="text" />
                        </label>
                        <label htmlFor="">
                            <div>Mayor precio</div>
                            <input type="text" />
                        </label>
                        <label htmlFor="">
                            <div>Desde</div>
                            <input type="text" />
                        </label>
                        <label htmlFor="">
                            <div>Hasta</div>
                            <input type="text" />
                        </label>
                        <Button type="submit" className={estilo.boton}>
                            Filtrar
                        </Button>
                    </form>
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










