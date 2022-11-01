import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ContextConnected from "../../context/ContextConnected";
import { NavLink } from 'react-router-dom';

import "../../styles/navbar/NavBar.css";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";


function NavBar() {
    const Connected = useContext(ContextConnected)

    const toggleLoginMenu = async () => {
        if(Connected.loginOpened) {
            Connected.setLoginOpened(false);
        } else {
            Connected.setRegisterOpened(false);
            Connected.setLoginOpened(true);
        }
    }

    const toggleRegisterMenu = async () => {
        if(Connected.registerOpened) {
          Connected.setRegisterOpened(false);
        } else {
          Connected.setLoginOpened(false);
          Connected.setRegisterOpened(true); 
        }
    }

    const logout = async () => {
        Connected.setUserInfo(null);
        localStorage.removeItem('token');
    }

    return(
        
        <Navbar className="navbar" expand="lg">
            <Container className="unpadding" fluid>
                <Navbar.Brand className="upf" ><NavLink className="nav-link" to="/">U P F</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: 'fit-content' }}
                    navbarScroll
                >

                    <Nav.Item>
                        <NavLink className="nav-link" to="/Sobre-Nosotros">Quiénes Somos</NavLink>
                    </Nav.Item>

                    <Nav.Item>
                        <NavLink className="nav-link" to="/Eventos">Eventos</NavLink>
                    </Nav.Item>

                    <Nav.Item>
                        <NavLink className="nav-link" to="/Marketplace">Marketplace</NavLink>
                    </Nav.Item>

                    <Nav.Item>
                        <NavLink className="nav-link" to="/Pool">Pool</NavLink>
                    </Nav.Item>

                </Nav>
                <Form className="d-flex">

                    {Connected.userInfo? (
                        <>
                            <Button 
                                    className="button nav-login-button" 
                                    variant="primary"
                                    onClick={() => {
                                        logout();
                                        window.location.reload();
                                    }}
                                    >{Connected.userInfo.first_name} {Connected.userInfo.last_name} <FontAwesomeIcon className="logout-icon" icon={faArrowRightFromBracket} /></Button>
                        </>
                    ) : (
                        <>
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
                            
                        </>
                    )}

                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );



}

export default NavBar;