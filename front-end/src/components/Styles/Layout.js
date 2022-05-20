import React from 'react'
import {Container} from 'react-bootstrap';

export const Layout = (props) =>{
    return (
        <Container className="bg-color-primary">
            {props.children}
        </Container>
    );
}