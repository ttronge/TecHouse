import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import estilo from './card.module.css'

import axios from 'axios'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard() {
    const [propiedades, setPropiedades] = useState([])
    const classes = useStyles();
    useEffect(() => {
        axios.get("http://localhost:3009/api/propiedades")
            .then((x) => {
                setPropiedades(x.data)
            })
    }, [])

    console.log(propiedades);
    return (
        <div className={estilo.fondo}>


            <div className={estilo.container}>
                {
                    propiedades.length > 0 &&
                    propiedades.map(propiedad => {
                        return (
                            <div key={propiedad.id}>
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
                                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                across all continents except Antarctica
                                    </Typography>
                                            <Box fontWeight="fontWeightBold" m={1}>
                                                price: {propiedad.price}
                                            </Box>

                                        </CardContent>
                                    </CardActionArea>
                                    <Button>
                                        ver mas
                                </Button>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}



