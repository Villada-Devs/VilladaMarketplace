import React, { useContext, useEffect }from "react";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import ContextConnected from "../../context/ContextConnected";

import "../../styles/navbar/NavBar.css";

function NavBar() {

    const Connected = useContext(ContextConnected)

    const navigate = useNavigate();

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
                                className="button nav-profile-button"
                                onClick={() => { navigate("/Perfil"); }}
                            ><div className="nav-profile-button-img"></div>{Connected.userInfo.username}</Button>

                            <Button 
                                className="button nav-login-button"
                                onClick={() => {
                                    logout();
                                    window.location.reload();
                                }}
                            ><FontAwesomeIcon className="logout-icon" icon={faArrowRightFromBracket} /></Button>
                        </>
                    ) : (
                        <>
                            <Button 
                                className="button"
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