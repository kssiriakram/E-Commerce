
import React,{useRef} from 'react';
import {useHistory,useLocation} from "react-router-dom";
import {Nav,Navbar,Container,NavDropdown,Form,Button,FormControl} from 'react-bootstrap';

function Navigationbar ()  {
  const input=useRef(null);
  let history = useHistory();
  let location = useLocation();
  
  const logout = () => {
   localStorage.clear();
  }

    return (
      <>
      <Navbar bg="light" expand="lg"  className="mb-5">
  <Container fluid>
    <Navbar.Brand href="#">E-commerce</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Cart">
        Cart
        </Nav.Link>
        <NavDropdown title="login" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/Register">Register</NavDropdown.Item>
          <NavDropdown.Item href="/Connexion">Connection</NavDropdown.Item>
          <NavDropdown.Item href="/" onClick={logout}>Log out</NavDropdown.Item>
        </NavDropdown>
      </Nav>
     {(location.pathname!=="/Connexion" && location.pathname!=="/Register" && location.pathname!=="/Cart") &&  <Form className="d-flex">
        <FormControl
          ref={input}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success" type="submit" onClick={()=>{history.push(`/Home/${input.current.value}`)}}>Search</Button>
      </Form>}
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
    );
}
export default Navigationbar;