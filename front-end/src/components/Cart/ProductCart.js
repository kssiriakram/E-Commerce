import React  from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,IconButton} from '@material-ui/core';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart'
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';


import useStyles from '../Styles/styles';
import { useHistory } from 'react-router-dom';
function ProductCart({item}) {
      const classes =  useStyles();
      let history = useHistory();
      
    
    function delete_item()
    {
        fetch('http://localhost:8000/carts/changequantity/',{
            'method' : 'POST',
            "headers" : {
              "Content-type" : "text/xml",
             // "X-CSRFToken" :csrftoken 
            },
            "body":`<cart userId='${localStorage.getItem('id')}'><quantity id='${item.id}'>0</quantity></cart>`})
        .then(response=>
           response.text())
        .then(data=>{
          if(data==="Invalid input"){
               alert("error at deleting items to cart");
          }
          else{
            alert("item is successfully deleted");
            
          }
        })
    
    }

    const handle_items = (e) => {
        e.preventDefault();
        delete_item();
    }
    return (
        <Card classename={classes.root}>
            <CardMedia className={classes.media} image={item.image}
            title={item.brand}/>
        <CardContent>
            <div classename={classes.cardContent}>
                <Typography varaint="h5" gutterBottom>
                  {item.brand}
                </Typography>
                <Typography varaint="h5" gutterBottom>
                  {item.price}
                </Typography>
                <Typography varaint="h5" gutterBottom>
                  Quantity : {item.qte}
                </Typography>
            </div>
            <Typography variant="body2" color="textSecondary">
                {item.name}
            </Typography>
            </CardContent>
            <CardActions className={`justify-content-between ${classes.cardActions}`} disableSpacing>
                <IconButton aria-label="Add to Cart" onClick={handle_items}>
                    <RemoveShoppingCartIcon/>
                </IconButton>
                <IconButton aria-label="see item info" onClick={()=>{history.push(`/Information/${item.id}`)}}>
                    <RemoveRedEyeIcon/>
                </IconButton>
            </CardActions>
        </Card>
           )
}

export default ProductCart