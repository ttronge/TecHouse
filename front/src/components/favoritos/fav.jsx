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
import axios from 'axios';



const Fav = () => {

    const user = localStorage.getItem('user')
    const usuario = JSON.parse(user)
    console.log(usuario)

    const [casaDepto, setCasaDepto] = useState([])

    const borrar = () => {
        localStorage.removeItem()
    }



    useEffect(() => {
        axios.get(`http://localhost:3009/api/users/favorite/${usuario._id}`)
            .then((x) => {
                setCasaDepto(x.data.favoritos);
            })
    }, [])

    console.log(casaDepto);
    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        },
    });


    const classes = useStyles();
    if (casaDepto) {
        return (
            <div>
                <Navbar />
                <h1>Tus favoritos {usuario.name}</h1>
                < div className={estilo.fondo} >
                    <div className={estilo.container}>
                        {
                            casaDepto.length > 0 &&
                            casaDepto.map(propiedad => {
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












