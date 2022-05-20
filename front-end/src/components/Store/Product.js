import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons'
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import {useHistory} from "react-router-dom";
import useStyles from '../Styles/styles';
function Product({item}) {
      const classes =  useStyles();
      let history = useHistory();
    
    function add_item()
    {
        fetch('http://localhost:8000/carts/additem/',{
            'method' : 'POST',
            "headers" : {
              "Content-type" : "text/xml",
             // "X-CSRFToken" :csrftoken 
            },
            "body":`<cart userId="${localStorage.getItem('id')}"><addcomputer>${item.id}</addcomputer></cart>`})
        .then(response=>
           response.text())
        .then(data=>{
           
          if(data==="Item added"){
            alert("item is successfully added");
               
          }
          else{
            alert("error at adding items to cart");
          }
        })
    
    }

    const handle_items = (e) => {
        e.preventDefault();
        add_item();
    }
    return (
        <Card classename={classes.root}>
            <CardMedia className={classes.media}  image={item.image}  title={item.brand}/>
            
        <CardContent>
            <div classename={classes.cardContent}>
                <Typography varaint="h5" gutterBottom>
                  {item.brand}
                </Typography>
                <Typography varaint="h5" gutterBottom>
                  {item.price}
                </Typography>
            </div>
            <Typography variant="body2" color="textSecondary">
                {item.name}
            </Typography>
            </CardContent>
            <CardActions className={`justify-content-between ${classes.cardActions}`} disableSpacing >
                <IconButton aria-label="Add to Cart" onClick={handle_items}>
                    <AddShoppingCart/>
                </IconButton>
                <IconButton  aria-label="see item info" onClick={()=>{history.push(`/Information/${item.id}`)}}>
                    <RemoveRedEyeIcon/>
                </IconButton>
            </CardActions>
        </Card>
           )
}

export default Product
