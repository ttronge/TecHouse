import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import estilo from '../card/card.module.css'
//-----------material --------------------
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';



const Fav = () => {
    const fav = localStorage.getItem('favoritos')
    const favoritos = JSON.parse(fav)
    const user = localStorage.getItem('user')
    const usuario = JSON.parse(user)
    console.log(favoritos)

    const borrar = () => {
        localStorage.removeItem()
    }






    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        },
    });


    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <h1>Tus favoritos {usuario.name}</h1>
            < div className={estilo.fondo} >
                <div className={estilo.container}>
                    {
                        favoritos.length > 0 &&
                        favoritos.map(propiedad => {
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
                                        <Button  >
                                            ❤️
                                        </Button>
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



export default Fav









