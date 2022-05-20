import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useHistory} from "react-router-dom";


function Register() {
const [name_error,setName_error]= useState('');
const [password_error,setPassword_error]= useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const history=useHistory();

  const  add_user = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/users/login/',{
        'method' : 'POST',
        "headers" : {
          "Content-type" :"text/xml; charset=utf-8",
         // "X-CSRFToken" :csrftoken 
        },
        "body":`<login><email>${email}</email><password>${password}</password></login>`
                })
    .then(response=>
       response.text())
    .then(data=>{
      if(data==="Invalid email or password" || data==="User Not Found"){
             setName_error("invalid name");
          setPassword_error("invalid password");
            }
        
    else {
         localStorage.setItem("login",true);
         localStorage.setItem("id",data);
         localStorage.setItem("email",email); 
         history.push('/');
      }
    })
}

  

      return(
        <Container >
            <Row className="justify-content-between g-4" > 
            <Col xs={12} sm={6} md={4}  >
           <div>
               <h1>
               Register now
               </h1>
           </div>
        <Form onSubmit={add_user} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter username" />
          {name_error && <Form.Text className='text-danger'> {name_error} </Form.Text>}
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
          {password_error && <Form.Text className='text-danger'> {password_error} </Form.Text>}
        
        </Form.Group>
        
        <Button variant="primary" type="submit" onClick={add_user}>
          Submit
        </Button>
      </Form>
      </Col>
      <Col xs={12} sm={6} md={4}  >
      <h1 className=" mb-5">inscrivez-vous</h1>
       <p className="mb-5">Créez votre compte client E-commerce en quelques clics !
          Vous pouvez vous inscrire soit en utilisant votre adresse e-mail
          .</p> 
         <Button href="/Connexion" variant="primary" type="submit">
          Submit
        </Button>
      </Col>
      </Row>
      </Container>
      
    )
}

export default Register
