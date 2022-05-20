import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Row,Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {Grid} from '@material-ui/core';
import {useHistory} from "react-router-dom";
import Figure from 'react-bootstrap/Figure'
import Form from 'react-bootstrap/Form';

export const Information = () =>{
    const params = useParams();
    let history = useHistory();
    const[items,setItems]=useState( {brand: '',
    name: '',
    cpu: '',
    ram: '',
    display: '',
    technology:'',
    dedicated_gpu:'',
    integrated_gpu:'',
    storage:'',
    battery:'',
    color:'',
    usecase:'',
    releasedate:'',
    quantity:'',
    os:'',
    price:'',
    image:''



    });
  
    function buildProduct(xml){

      if(xml.getAttribute("type")==="laptop" && xml.getElementsByTagName("dedicated_gpu").length!=0){

     let item={
        brand: xml.getElementsByTagName('manufacturer')[0].childNodes[0].nodeValue
         ,name:xml.getElementsByTagName('manufacturer')[0].childNodes[0].nodeValue.concat(' ',
         xml.getElementsByTagName('series')[0].childNodes[0].nodeValue.concat(' ',
         xml.getElementsByTagName('model')[0].childNodes[0].nodeValue)),

        cpu:xml.getElementsByTagName('cpu')[0].getElementsByTagName('manufacturer')[0].childNodes[0].nodeValue.concat(' ',
        xml.getElementsByTagName('cpu')[0].getElementsByTagName('model')[0].childNodes[0].nodeValue.concat(" frequency : "
        ,xml.getElementsByTagName('cpu')[0].getElementsByTagName('frequency')[0].childNodes[0].nodeValue.concat(" boostfrequency : "
        ,xml.getElementsByTagName('cpu')[0].getElementsByTagName('boost_frequency')[0].childNodes[0].nodeValue))),
         
        ram:xml.getElementsByTagName('ram')[0].getElementsByTagName('capacity')[0].childNodes[0].nodeValue.concat(' ',
        xml.getElementsByTagName('ram')[0].getElementsByTagName('type')[0].childNodes[0].nodeValue.concat(" ram_slots : "
        ,xml.getElementsByTagName('ram')[0].getElementsByTagName('number_slots')[0].childNodes[0].nodeValue)),

        display:xml.getElementsByTagName('display')[0].getElementsByTagName('size')[0].childNodes[0].nodeValue.concat(' ',
        xml.getElementsByTagName('display')[0].getElementsByTagName('technology')[0].childNodes[0].nodeValue),

        dedicated_gpu : xml.getElementsByTagName('dedicated_gpu')[0].getElementsByTagName('manufacturer')[0].childNodes[0].nodeValue.concat(' ',
        xml.getElementsByTagName('dedicated_gpu')[0].getElementsByTagName('model')[0].childNodes[0].nodeValue.concat(' ',
        xml.getElementsByTagName('dedicated_gpu')[0].getElementsByTagName('capacity')[0].childNodes[0].nodeValue.concat(' ','GB'))),

        integrated_gpu :  xml.getElementsByTagName('integrated_gpu')[0].getElementsByTagName('manufacturer')[0].childNodes[0].nodeValue.concat(' ',
        xml.getElementsByTagName('integrated_gpu')[0].getElementsByTagName('model')[0].childNodes[0].nodeValue),
        

        storage :  xml.getElementsByTagName('storage')[0].getElementsByTagName('capacity')[0].childNodes[0].nodeValue.concat(' '
        ,xml.getElementsByTagName('storage')[0].getElementsByTagName('type')[0].childNodes[0].nodeValue),

        battery :  xml.getElementsByTagName('battery')[0].childNodes[0].nodeValue.concat(' ','h'),

        color : xml.getElementsByTagName('colour')[0].childNodes[0].nodeValue,

        usecase: xml.getElementsByTagName('usecase')[0].childNodes[0].nodeValue,

        releasedate : xml.getElementsByTagName('release_date')[0].childNodes[0].nodeValue,

        quantity : xml.getElementsByTagName('quantity')[0].childNodes[0].nodeValue,

        os : xml.getElementsByTagName('os')[0].getElementsByTagName('type')[0].childNodes[0].nodeValue.concat(' ',
        xml.getElementsByTagName('os')[0].getElementsByTagName('version')[0].childNodes[0].nodeValue),

       price:`$ ${xml.getElementsByTagName('price')[0].childNodes[0].nodeValue}`,
       image: xml.getElementsByTagName('image')[0].childNodes[0].nodeValue};
       setItems(item);

     }if(xml.getAttribute("type")==="laptop" && xml.getElementsByTagName("dedicated_gpu").length===0){

      let item={
       brand: xml.getElementsByTagName('manufacturer')[0].childNodes[0].nodeValue

        ,name:xml.getElementsByTagName('manufacturer')[0].childNodes[0].nodeValue.concat(' ',
        xml.getElementsByTagName('series')[0].childNodes[0].nodeValue.concat(' ',
        xml.getElementsByTagName('model')[0].childNodes[0].nodeValue)),

       cpu:xml.getElementsByTagName('cpu')[0].getElementsByTagName('manufacturer')[0].childNodes[0].nodeValue.concat(' ',
       xml.getElementsByTagName('cpu')[0].getElementsByTagName('model')[0].childNodes[0].nodeValue.concat(" frequency : "
       ,xml.getElementsByTagName('cpu')[0].getElementsByTagName('frequency')[0].childNodes[0].nodeValue.concat(" boostfrequency : "
       ,xml.getElementsByTagName('cpu')[0].getElementsByTagName('boost_frequency')[0].childNodes[0].nodeValue))),
        
       ram:xml.getElementsByTagName('ram')[0].getElementsByTagName('capacity')[0].childNodes[0].nodeValue.concat(' ',
       xml.getElementsByTagName('ram')[0].getElementsByTagName('type')[0].childNodes[0].nodeValue.concat(" ram_slots : "
       ,xml.getElementsByTagName('ram')[0].getElementsByTagName('number_slots')[0].childNodes[0].nodeValue)),

       display:xml.getElementsByTagName('display')[0].getElementsByTagName('size')[0].childNodes[0].nodeValue.concat(' ',
       xml.getElementsByTagName('display')[0].getElementsByTagName('technology')[0].childNodes[0].nodeValue),

       integrated_gpu :  xml.getElementsByTagName('integrated_gpu')[0].getElementsByTagName('manufacturer')[0].childNodes[0].nodeValue.concat(' ',
       xml.getElementsByTagName('integrated_gpu')[0].getElementsByTagName('model')[0].childNodes[0].nodeValue),
    
       storage :  xml.getElementsByTagName('storage')[0].getElementsByTagName('capacity')[0].childNodes[0].nodeValue.concat(' '
       ,xml.getElementsByTagName('storage')[0].getElementsByTagName('type')[0].childNodes[0].nodeValue),

       battery :  xml.getElementsByTagName('battery')[0].childNodes[0].nodeValue.concat(' ','h'),

       color : xml.getElementsByTagName('colour')[0].childNodes[0].nodeValue,

       usecase: xml.getElementsByTagName('usecase')[0].childNodes[0].nodeValue,

       releasedate : xml.getElementsByTagName('release_date')[0].childNodes[0].nodeValue,

       quantity : xml.getElementsByTagName('quantity')[0].childNodes[0].nodeValue,

       os : xml.getElementsByTagName('os')[0].getElementsByTagName('type')[0].childNodes[0].nodeValue.concat(' ',
       xml.getElementsByTagName('os')[0].getElementsByTagName('version')[0].childNodes[0].nodeValue),

      price:`$ ${xml.getElementsByTagName('price')[0].childNodes[0].nodeValue}`,
      image: xml.getElementsByTagName('image')[0].childNodes[0].nodeValue};
      setItems(item);
    }
     else if(xml.getAttribute("type")==="desktop" && xml.getElementsByTagName("dedicated_gpu").length!==0){
     let  item={
        brand: xml.getElementsByTagName('manufacturer')[0].childNodes[0].nodeValue

         ,name:xml.getElementsByTagName('manufacturer')[0].childNodes[0].nodeValue.concat(' ',
         xml.getElementsByTagName('series')[0].childNodes[0].nodeValue.concat(' ',
         xml.getElementsByTagName('model')[0].childNodes[0].nodeValue)),

        cpu:xml.getElementsByTagName('cpu')[0].getElementsByTagName('manufacturer')[0].childNodes[0].nodeValue.concat(' ',
        xml.getElementsByTagName('cpu')[0].getElementsByTagName('model')[0].childNodes[0].nodeValue.concat(" frequency : "
        ,xml.getElementsByTagName('cpu')[0].getElementsByTagName('frequency')[0].childNodes[0].nodeValue.concat(" boostfrequency : "
        ,xml.getElementsByTagName('cpu')[0].getElementsByTagName('boost_frequency')[0].childNodes[0].nodeValue))),
         
        ram:xml.getElementsByTagName('ram')[0].getElementsByTagName('capacity')[0].childNodes[0].nodeValue.concat(' ',
        xml.getElementsByTagName('ram')[0].getElementsByTagName('type')[0].childNodes[0].nodeValue.concat(" ram_slots : "
        ,xml.getElementsByTagName('ram')[0].getElementsByTagName('number_slots')[0].childNodes[0].nodeValue)),

        dedicated_gpu : xml.getElementsByTagName('dedicated_gpu')[0].getElementsByTagName('manufacturer')[0].childNodes[0].nodeValue.concat(' ',
        xml.getElementsByTagName('dedicated_gpu')[0].getElementsByTagName('model')[0].childNodes[0].nodeValue.concat(' ',
        xml.getElementsByTagName('dedicated_gpu')[0].getElementsByTagName('capacity')[0].childNodes[0].nodeValue.concat(' ','GB'))),

        integrated_gpu :  xml.getElementsByTagName('integrated_gpu')[0].getElementsByTagName('manufacturer')[0].childNodes[0].nodeValue.concat(' ',
        xml.getElementsByTagName('integrated_gpu')[0].getElementsByTagName('model')[0].childNodes[0].nodeValue),
        

        storage :  xml.getElementsByTagName('storage')[0].getElementsByTagName('capacity')[0].childNodes[0].nodeValue.concat(' '
       ,xml.getElementsByTagName('storage')[0].getElementsByTagName('type')[0].childNodes[0].nodeValue),

        color : xml.getElementsByTagName('colour')[0].childNodes[0].nodeValue,

        usecase: xml.getElementsByTagName('usecase')[0].childNodes[0].nodeValue,

        releasedate : xml.getElementsByTagName('release_date')[0].childNodes[0].nodeValue,

        quantity : xml.getElementsByTagName('quantity')[0].childNodes[0].nodeValue,

        os : xml.getElementsByTagName('os')[0].getElementsByTagName('type')[0].childNodes[0].nodeValue.concat(' ',
        xml.getElementsByTagName('os')[0].getElementsByTagName('version')[0].childNodes[0].nodeValue),

       price:`$ ${xml.getElementsByTagName('price')[0].childNodes[0].nodeValue}`,
       image: xml.getElementsByTagName('image')[0].childNodes[0].nodeValue};
       setItems(item);

     }else if(xml.getAttribute("type")==="desktop" && xml.getElementsByTagName("dedicated_gpu").length===0){
      let item={
        brand: xml.getElementsByTagName('manufacturer')[0].childNodes[0].nodeValue

         ,name:xml.getElementsByTagName('manufacturer')[0].childNodes[0].nodeValue.concat(' ',
         xml.getElementsByTagName('series')[0].childNodes[0].nodeValue.concat(' ',
         xml.getElementsByTagName('model')[0].childNodes[0].nodeValue)),

        cpu:xml.getElementsByTagName('cpu')[0].getElementsByTagName('manufacturer')[0].childNodes[0].nodeValue.concat(' ',
        xml.getElementsByTagName('cpu')[0].getElementsByTagName('model')[0].childNodes[0].nodeValue.concat(" frequency : "
        ,xml.getElementsByTagName('cpu')[0].getElementsByTagName('frequency')[0].childNodes[0].nodeValue.concat(" boostfrequency : "
        ,xml.getElementsByTagName('cpu')[0].getElementsByTagName('boost_frequency')[0].childNodes[0].nodeValue))),
         
        ram:xml.getElementsByTagName('ram')[0].getElementsByTagName('capacity')[0].childNodes[0].nodeValue.concat(' ',
        xml.getElementsByTagName('ram')[0].getElementsByTagName('type')[0].childNodes[0].nodeValue.concat(" ram_slots : "
        ,xml.getElementsByTagName('ram')[0].getElementsByTagName('number_slots')[0].childNodes[0].nodeValue)),

        integrated_gpu :  xml.getElementsByTagName('integrated_gpu')[0].getElementsByTagName('manufacturer')[0].childNodes[0].nodeValue.concat(' ',
        xml.getElementsByTagName('integrated_gpu')[0].getElementsByTagName('model')[0].childNodes[0].nodeValue),
        

        storage :  xml.getElementsByTagName('storage')[0].getElementsByTagName('capacity')[0].childNodes[0].nodeValue.concat(' '
       ,xml.getElementsByTagName('storage')[0].getElementsByTagName('type')[0].childNodes[0].nodeValue),

        color : xml.getElementsByTagName('colour')[0].childNodes[0].nodeValue,

        usecase: xml.getElementsByTagName('usecase')[0].childNodes[0].nodeValue,

        releasedate : xml.getElementsByTagName('release_date')[0].childNodes[0].nodeValue,

        quantity : xml.getElementsByTagName('quantity')[0].childNodes[0].nodeValue,

        os : xml.getElementsByTagName('os')[0].getElementsByTagName('type')[0].childNodes[0].nodeValue.concat(' ',
        xml.getElementsByTagName('os')[0].getElementsByTagName('version')[0].childNodes[0].nodeValue),

       price:`$ ${xml.getElementsByTagName('price')[0].childNodes[0].nodeValue}`,
       image: xml.getElementsByTagName('image')[0].childNodes[0].nodeValue};
       setItems(item);
      }
    }
    
    
    function add_item()
    {
        fetch('http://localhost:8000/carts/additem/',{
            'method' : 'POST',
            "headers" : {
              "Content-type" : "text/xml",
             // "X-CSRFToken" :csrftoken 
            },
            "body":`<cart userId="${localStorage.getItem('id')}"><addcomputer>${params.id}</addcomputer></cart>`})
        .then(response=>
           response.text())
        .then(data=>{
           
          if(data==="Item added"){
            alert("item is successfully added");
               
          }
          else if(data==="Item incremented"){
            alert("item is successfully added");
          }
          else{
            alert("error at adding items to cart");
          }
        })
    
    }
   
    const  Fetch_items = ()=>{
      fetch("http://localhost:8000/computers")
      .then(response=>
         response.text())
      .then(data=>{
        
        let parser = new DOMParser();
        let xml = parser.parseFromString(data,"text/xml");
        for(let i=0;i<xml.getElementsByTagName('computer').length;i++){
          if(xml.getElementsByTagName('computer')[i].getAttribute('id')===params.id){
            xml=xml.getElementsByTagName('computer')[i];
          }
        }
        buildProduct(xml);


  
      }
      );
    }

  
   useEffect(() => {
     Fetch_items();
   },[]);
     return (<React.Fragment>
         <h1>{items.name}</h1>
         <Figure>
         <Figure.Image
         width={300}
         height={300}
         alt="171x180"
         src={items.image}
         />
         </Figure>
         <Form>
        <Form.Label><strong>Brand :</strong> {items.brand}</Form.Label> <br/>
        <Form.Label><strong>Cpu :</strong> {items.cpu}</Form.Label> <br/>
        <Form.Label><strong>Ram :</strong> {items.ram}</Form.Label> <br/>
        <Form.Label><strong>Display :</strong> {items.display}</Form.Label> <br/>
        <Form.Label><strong>Dedicated_gpu :</strong> {items.dedicated_gpu}</Form.Label>  <br/>
        <Form.Label><strong>integrated_gpu :</strong> {items.integrated_gpu}</Form.Label> <br/> 
        <Form.Label><strong>Storage :</strong> {items.storage}</Form.Label> <br/>
        <Form.Label><strong>Battery :</strong> {items.battery}</Form.Label> <br/>
        <Form.Label><strong>Color :</strong> {items.color}</Form.Label> <br/>
        <Form.Label><strong>Usecase :</strong> {items.usecase}</Form.Label><br/>
        <Form.Label><strong>Realeased date :</strong> {items.releasedate}</Form.Label><br/>
        <Form.Label><strong>Quantity :</strong> {items.quantity}</Form.Label>  <br/>
        <Form.Label><strong>Operating system :</strong> {items.os}</Form.Label> <br/>
        <Form.Label><strong>Price :</strong> {items.price}</Form.Label> <br/>
        </Form>
        <Grid className="mb-5">
        <Row  >
        <Col className="d-flex  justify-content-end ">
        <Button variant="secondary" type="submit" onClick={()=>{history.push('/')}}  >
          &lt; Go Back  
        </Button> 
        </Col>
        <Col className="d-flex  justify-content-end ">
        <Button variant="primary" type="submit" onClick={add_item} >
          add to the Cart
        </Button>
        </Col>
        </Row>
        </Grid>
      </React.Fragment>);
  }