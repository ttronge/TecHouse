import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import estilo from '../card/card.module.css'
import axios from 'axios';
//-----------material --------------------
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';
import { useStyles } from './favStyle'



const Fav = () => {

    const user = localStorage.getItem('user')
    const usuario = JSON.parse(user)
    const [casaDepto, setCasaDepto] = useState([])
    const classes = useStyles();

    useEffect(() => {
        axios.get(`http://localhost:3009/api/users/favorite/${usuario._id}`)
            .then((x) => {
                setCasaDepto(x.data.favoritos);
            })
    }, [])




    const verPropiedad = () => {
        return axios.get(`http://localhost:3009/api/users/favorite/${usuario._id}`)
            .then((x) => {
                setCasaDepto(x.data.favoritos);
            })

    }
    const DeleteFav = (x) => {
        console.log(typeof x);
        axios.post(`http://localhost:3009/api/users/favoriteDelete/${usuario._id}`, { "propiedadId": x })
            .then(() => {
                return verPropiedad()
            })
    }







    if (casaDepto.length > 0) {
        return (
            <div>
                <Navbar />
                <h1>Tus favoritos {usuario.name}</h1>
                < div className={estilo.fondo} >
                    <div className={estilo.container}>
                        {
                            casaDepto.length > 0 &&
                            casaDepto.map((propiedad, index) => {

                                return (

                                    console.log(propiedad),

                                    < div key={propiedad.index}  >
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

                                            <Button onClick={() => DeleteFav(index)}  >
                                                🗑️
                                                </Button>
                                        </Card>
                                    </div>
                                )
                            })
                        }



                    </div>
                </div>
            </div >


        )
    }

    else {
        return (
            <div>

                <Navbar />
                <h1>No tienes favoritos</h1>
            </div>
        )
    }


}



export default Fav












