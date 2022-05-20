import React from 'react'
import useForm from './useForm';
import validate from './validateInfo';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


function Connexion({submitForm}) {
  const {handleChange,values,add_user,errors} = useForm(submitForm,validate);
    return (
      <Container>
        <Col xs={12} sm={12} md={6}>
        <Form onSubmit={add_user}>
            <h1>Create your account</h1>
    <Form.Group className="mb-3 me-5" controlId="formBasicFirstname">
    <Form.Label>Last-name</Form.Label>
    <Form.Control  size="sm" type="text" placeholder="Last-name"
    name="last_name" value={values.last_name} onChange={handleChange}/>
   {errors.last_name && <Form.Text className='text-danger'>{errors.last_name} </Form.Text>}
    </Form.Group>
    <Form.Group className="mb-3 me-5 " controlId="formBasicLastName">
    <Form.Label>First-name</Form.Label>
    <Form.Control size="sm" type="text" placeholder="First-name"
    name="first_name"  value={values.first_name} onChange={handleChange}/>
    {errors.first_name && <Form.Text className='text-danger'>{errors.first_name} </Form.Text>}
    </Form.Group>
  <Form.Group className="mb-3 me-5 " controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control size="sm" type="email" placeholder="Enter email" 
    name="email" value={values.email} onChange={handleChange}/>
    {errors.email && <Form.Text className='text-danger'>{errors.email} </Form.Text>}
  </Form.Group>
  <Form.Group className="mb-3 me-5 " controlId="formBasicPhone">
    <Form.Label>Tel</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Enter entrer le numero de tel" 
    name="phone" value={values.phone} onChange={handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3 me-5 " controlId="formBasicTown">
    <Form.Label>Ville</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Enter la ville" 
    name="ville" value={values.ville} onChange={handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3 me-5 " controlId="formBasicAdresse">
    <Form.Label>Adresse</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Enter l'adresse" 
    name="adresse" value={values.adresse} onChange={handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3 me-5" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control size="sm" type="password" placeholder="Password" 
    name="password" value={values.password} onChange={handleChange}/>
    {errors.password && <Form.Text className='text-danger'>{errors.password} </Form.Text>}
    </Form.Group>
    <Form.Group className="mb-3 me-5" controlId="formBasicPassword1">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control size="sm" type="password" placeholder="Confirm-Password"
    name="password2" value={values.password2} onChange={handleChange}/>
     {errors.password2 && <Form.Text className='text-danger'>{errors.password2} </Form.Text>}
  </Form.Group>
  <Form.Group className="mb-3 me-5" controlId="formBasicCheckbox">
    <Form.Check size="sm" type="Checkbox" label="I accept the agreement" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={add_user} >
    Submit
  </Button>
</Form>
</Col>
</Container>
    )
}

export default Connexion
