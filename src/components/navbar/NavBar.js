import React from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "../../styles/navbar/NavBar.css";


function NavBar({toggleLoginMenu, toggleRegisterMenu, selectedView, setSelectedView, views}) {

    return(
        
        <Navbar className="navbar" expand="lg">
            <Container className="unpadding" fluid>
                <Navbar.Brand className="upf" href="/">U P F</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: 'fit-content' }}
                    navbarScroll
                >

                    <Nav.Item>
                        <Nav.Link href="/Marketplace">Marketplace</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="/Eventos">Eventos</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="/Pool">Pool</Nav.Link>
                    </Nav.Item>
                    

                </Nav>
                <Form className="d-flex">

                    <Button 
                        className="button nav-login-button" 
                        variant="primary"
                        onClick={() => {
                            toggleLoginMenu();
                        }}
                        >Iniciar Sesion</Button>

                    <Button 
                        className="button nav-register-button" 
                        variant="outline-primary"
                        onClick={() => {
                            toggleRegisterMenu();
                        }}
                        >Registrarse</Button>

                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );



}

export default NavBar;