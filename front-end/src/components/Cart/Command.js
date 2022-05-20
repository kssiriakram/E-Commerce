import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
const  Command = () => {


  return(
  <React.Fragment>
     <React.Fragment>
  <Container>
  <Row>
   <Col xs={12} sm={6} md={4}  >
  <h1 className=" mb-5">Felicitation </h1>
   <p className="mb-5">merci d'avoir choisi notre site, Votre commande est en cours de traitement, 
   vous aurais votre facture apres quelque minutes , verifiez votre boite email apres quelques minutes </p> 
     <Button href="/" variant="primary" type="submit">
      Revenir a Home
    </Button>
  </Col>
  </Row>
  </Container>
  </React.Fragment>
  </React.Fragment>
  )
}
export default Command;
