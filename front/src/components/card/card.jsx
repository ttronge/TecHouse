import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import SingleProperty from '../singleProperty/singleProperty'
//-------------------material ui-------------------------------------
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
//---------------------estilo de material ----------------------------
import { useStyles } from './cardStyle'
// -------------------------css---------------------------------------
import estilo from './card.module.css'
//--------------------------axios-------------------------------------
import axios from 'axios'




export default function Carta() {
    const [propiedades, setPropiedades] = useState([])
    const classes = useStyles();
    const local = localStorage.getItem('user')
    const dataFinal = JSON.parse(local)

    const destacadas = propiedades.slice(0, 6)


    useEffect(() => {
        axios.get("http://localhost:3009/api/propiedades")
            .then((x) => {
                setPropiedades(x.data)
            })
    }, [])



    return (
        <div>
            <div className={estilo.titulo1}>
                <h1>Propiedades destacadas</h1>
            </div>

            < div className={estilo.fondo} >
                <div className={estilo.container}>
                    {
                        destacadas.length > 0 &&
                        destacadas.map(propiedad => {
                            return (
                                < div key={propiedad._id}  >
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
                                            </CardContent>
                                        </CardActionArea>

                                        <Button>
                                            <Link to={`/propiedad/${propiedad._id}`} className={estilo.link}> Ver mas</Link>
                                        </Button>
                                        {dataFinal ? <Button onClick={() => {
                                            axios.post(`http://localhost:3009/api/users/favorite/${dataFinal._id}`, { "propiedadId": propiedad._id })
                                                .then((x) => {

                                                    alert('Se ha agredado a tus favoritos correctamente')
                                                })
                                        }}>
                                            ❤️
                                                </Button> : null}


                                    </Card>
                                </div>
                            )
                        })
                    }



                </div>
            </div>
        </div>
    )
}



