import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FullscreenExit } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    // minHeight: 150,
    // maxHeight: 500,
    // width:150,
    // height: 350,
    maxWidth: 345,
    maxHeight:350
  },
  media: {
    height: 100,
    // maxHeight:250,
    padding: 50,
    // margin: 20,
    // width: '100%',

   

  },
  img: {
  //   width: 200,
  // height: 50,
  objectFit: 'cover',
  // height: 200,
  },


  actions: {



  }
});

export function MediaCard({ productImage, productTitle, productDescription, productCategory }) {
  const classes = useStyles();
  // category: "men clothing"
  // description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
  // id: 1
  // image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  // price: 109.95
  // title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
  // _id: "5fdd3fdac69db03ea0824a3d"


  // Button'a onClik with history
  return (
    <Card className={classes.root}>
      <CardActionArea > 
        {/* <Typography gutterBottom variant="h5" component="h2">
          {productTitle}
          </Typography> */}

        <CardMedia
          className={classes.media}
          image={productImage}//*
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {productTitle}
          </Typography>
        </CardContent>
      </CardActionArea>


      <CardActions className={classes.actions}>
        <Button size="small" color="primary">
          See more
        </Button>
        {/* <Button size="small" color="primary">
        Button 2
        </Button> */}
      </CardActions>


    </Card>
  );
}
