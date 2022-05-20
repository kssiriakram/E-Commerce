import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {Grid} from '@material-ui/core';
import Product from './Product';
import {useHistory} from "react-router-dom";

export const Home = () =>{
  const params = useParams();
  let history = useHistory();
  const[items,setItems]=useState([]);



  function buildProduct(xml){
    
    for(let i=0 ; i<xml.length;i++){
     let item={id: xml[i].getAttribute('id'),brand: xml[i].getElementsByTagName('manufacturer')[0].childNodes[0].nodeValue
       ,name:xml[i].getElementsByTagName('manufacturer')[0].childNodes[0].nodeValue+' '+
       xml[i].getElementsByTagName('series')[0].childNodes[0].nodeValue+' '+
       xml[i].getElementsByTagName('model')[0].childNodes[0].nodeValue,
     price:`$ ${parseInt(xml[i].getElementsByTagName('price')[0].childNodes[0].nodeValue)}`,
     image:xml[i].getElementsByTagName('image')[0].childNodes[0].nodeValue};
     setItems((items)=>{
       return [...items,item];
     });
   }; 
  }
  

  const  Fetch_items = ()=>{
    if(typeof params.name === 'undefined'){
    fetch("http://localhost:8000/computers").
    then(response=>response.text()).then(data=>{
      let parser = new DOMParser();
      let xml = parser.parseFromString(data,"text/xml");
      
      buildProduct(xml.getElementsByTagName('computer'));
    }
    );
  }else{
    console.log(params.name);
    fetch(`http://localhost:8000/computers?op==&filter=manufacturer&value=${params.name}`).then(response=>
       response.text()).then(data=>{
      let parser = new DOMParser();
      let xml = parser.parseFromString(data,"text/xml");
      buildProduct(xml.getElementsByTagName('computer'));

    });
  }
}

 useEffect(() => {
   Fetch_items();

 },[]);
   return (<React.Fragment>
     <Container>
       <Row className="mb-3">
         <Col>
        <h1> Get your free catalog</h1>
        </Col>
        </Row>
        <Row className="mb-3">
          <Col>
          <p>Click on button to get your free catalog now!!</p>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
          <Button href="http://localhost:8000/computers/print" variant="primary" type="submit"> Get catalog
        </Button>
          </Col>
        </Row>
        </Container>
       <h1>Our Products</h1>
       <Grid  container justifyContent="center" spacing={4}>
       {items.map((item)=>(
         <Grid item key={item.id} xs={12} sm={6} lg={3}>
           <Product item={item} onClick={()=>{history.push(`/Information/${item.id}`)}}/>
           </Grid>
       ))}
    </Grid>
    </React.Fragment>);
}

