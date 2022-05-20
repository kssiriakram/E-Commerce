import React,{useState,useEffect} from 'react';
import { Button } from 'react-bootstrap';
import ProductCart from './ProductCart';
import {Grid} from '@material-ui/core';
import {Row,Col } from 'react-bootstrap';
import {useHistory} from "react-router-dom";


function Cart() {
  let history = useHistory();
  const[items,setItems]=useState([]);
  
  function zeroFill( number, width )
{
  width -= number.toString().length;
  if ( width > 0 )
  {
    return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
  }
  return number + ""; // always return a string
}

  function buildProduct(xml){
    for(let i=0 ; i<xml.length;i++){
     let item={id: xml[i].getAttribute('id'),brand: xml[i].getElementsByTagName('manufacturer')[0].childNodes[0].nodeValue
       ,name:xml[i].getElementsByTagName('manufacturer')[0].childNodes[0].nodeValue+' '+
       xml[i].getElementsByTagName('series')[0].childNodes[0].nodeValue+' '+
       xml[i].getElementsByTagName('model')[0].childNodes[0].nodeValue,
     price:`$ ${parseInt(xml[i].getElementsByTagName('total')[0].childNodes[0].nodeValue)}`,
     qte: xml[i].getElementsByTagName('qte')[0].childNodes[0].nodeValue,
     image: xml[i].getElementsByTagName('image')[0].childNodes[0].nodeValue};
     setItems((items)=>{
       return [...items,item];
     });
   }; 
  }
   


function get_items()
{
    fetch(`http://localhost:8000/carts/getcart/`,{
        'method' : 'POST',
        "headers" : {
          "Content-type" : "text/xml",
         // "X-CSRFToken" :csrftoken 
        },
        "body":`<cart userId='${localStorage.getItem('id')}'></cart>`})
    .then(response=>
       response.text())
    .then(data=>{
      var parser = new DOMParser();
      var xml = parser.parseFromString(data,"text/xml");
      
      if(xml==null){
            alert("error occured while getting cart");
      }
      else if(xml.getElementsByTagName('carts')[0].getElementsByTagName('cart')[0].getElementsByTagName('total')[0].childNodes[0].nodeValue==0){
        alert("cart is empty");
  }
      else{
     buildProduct(xml.getElementsByTagName("carts")[0].getElementsByTagName("cart")[0].getElementsByTagName("computer"));
      }
    });
  }

    function create_facture(){
      fetch(`http://localhost:8000/users/getuser/`,{
        'method' : 'POST',
        "headers" : {
          "Content-type" : "text/xml",
         // "X-CSRFToken" :csrftoken 
        },
        "body":`<getuser>${localStorage.getItem('id')}</getuser>`})
    .then(response=>
       response.text())
    .then(user=>{
      fetch(`http://localhost:8000/carts/getcart/`,{
        'method' : 'POST',
        "headers" : {
          "Content-type" : "text/xml",
         // "X-CSRFToken" :csrftoken 
        },
        "body":`<cart userId='${localStorage.getItem('id')}'></cart>`})
        .then(response => response.text())
    .then(cart=>{
      var parser = new DOMParser();
      var xml = parser.parseFromString(cart,"text/xml");
      if(xml.getElementsByTagName("carts")==null){
         alert("cart is empty");
      }
      else{
      var xml_cart = parser.parseFromString(cart,"text/xml");
      var xml_user = parser.parseFromString(user,"text/xml");
      xml_user=xml_user.getElementsByTagName('user')[0];
      var facture =null;
      let facture_user = `<facture id='1' userId='${xml_user.getAttribute('id')}'>
      <dateFacturation>${new Date().getFullYear().toString().concat("-",zeroFill((new Date().getMonth()+1),2).toString().concat("-",zeroFill(new Date().getDate(),2).toString()))}</dateFacturation>
      <livraison>
      <adresse>${xml_user.getElementsByTagName('adresse')[0].childNodes[0].nodeValue}</adresse>
      <ville>${xml_user.getElementsByTagName('ville')[0].childNodes[0].nodeValue}</ville>
      <dateLivraison>${new Date().getFullYear().toString().concat("-",zeroFill((new Date().getMonth()+1),2).toString().concat("-",zeroFill((new Date().getDate()+2),2).toString()))}</dateLivraison>
      <recepteur>
      <firstName>${xml_user.getElementsByTagName('firstName')[0].childNodes[0].nodeValue}</firstName>
      <lastName>${xml_user.getElementsByTagName('lastName')[0].childNodes[0].nodeValue}</lastName>
      <phone>${xml_user.getElementsByTagName('phone')[0].childNodes[0].nodeValue}</phone>
      <email>${xml_user.getElementsByTagName('email')[0].childNodes[0].nodeValue}</email>
      </recepteur>
      
      </livraison>
      <paiment>carte</paiment>
      <commande>
      <total>${xml_cart.getElementsByTagName('total')[0].childNodes[0].nodeValue}</total>
      </commande></facture>`;
      facture_user=parser.parseFromString(facture_user,'text/xml');
      facture=facture_user;
       const constant = xml_cart.getElementsByTagName('computer');
       let i=0;
       let k=constant.length;
      while(i<k){
      facture.getElementsByTagName('commande')[0].appendChild(xml_cart.getElementsByTagName('computer')[0]);
      i++;
      }
      facture=(new XMLSerializer()).serializeToString(facture);
      fetch(`http://localhost:8000/invoices/createinvoice/`,{
        'method' : 'POST',
        "headers" : {
          "Content-type" : "text/xml",
         // "X-CSRFToken" :csrftoken 
        },
        "body":facture})
    .then(response=>
       response.text()).
       then(data => {
         if(data==="Invoice added."){
          fetch(`http://localhost:8000/carts/emptycart/`,{
            'method' : 'POST',
            "headers" : {
              "Content-type" : "text/xml",
             // "X-CSRFToken" :csrftoken 
            },
            "body":`<cart userId='${localStorage.getItem('id')}'></cart>`})
        .then(response=>
           response.text()).
           then(data => {
             if(data==="Cart emptied successfully"){
             history.push('/Command');
             }
           })
    
          }
        });
         }
       })

      });
    }
    
      
      
   


 useEffect(() => {
   if(localStorage.getItem('id')!=null){
  get_items();
   }
 },[]);
   return (<React.Fragment>
       <h1>Cart</h1>
       <Grid  container justifyContent="center" spacing={4}>
       {items.map((item)=>(
         <Grid item key={item.id} xs={12} sm={6} lg={3}>
           <ProductCart item={item} />
           </Grid>
       ))}  
    </Grid>
    <Grid className="mb-5 mt-5">
       <Row  >
        <Col className="d-flex  justify-content-end ">
        <Button variant="secondary" type="submit" onClick={()=>{history.push('/')}}  >
          &lt; Go Back  
        </Button> 
        </Col>
        <Col className="d-flex  justify-content-end ">
        <Button variant="primary" type="submit" onClick={create_facture}>
          Command
        </Button>
        </Col>
        </Row>
        </Grid>

    </React.Fragment>);
}


export default Cart;
