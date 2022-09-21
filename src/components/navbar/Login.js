import React from "react";

import CloseButton from 'react-bootstrap/CloseButton';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "../../styles/navbar/Log-Reg.css";


function Login({login, toggleLoginMenu, timeMessage, toggleRegisterMenu, handleCardClick}) {
    
    return (

        <>

            <Container className="log-reg-bg" onClick={async () => { toggleLoginMenu(); }} fluid>

                <div className='log-reg-card' onClick={handleCardClick}>

                    <div className='log-reg-card-top'>
                        <h3>Iniciar Sesion</h3>
                        <CloseButton onClick={async () => { toggleLoginMenu(); }}/>
                    </div>
                    <hr className='log-reg-hr'></hr>

                    <Form>
                        <Form.Group className="mb-3 unmarging" controlId="Email">
                            <Form.Label className="input-label">Mail Institucional</Form.Label>
                            <Form.Control 
                                id="login-mail-input" 
                                className="input" 
                                type="email" 
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 unmarging" controlId="Password">
                            <Form.Label className='input-label'>Contraseña</Form.Label>
                            <Form.Control 
                                id="login-password-input" 
                                className='input' 
                                type="password" 
                                placeholder="8+ carácteres" 
                            />
                        </Form.Group>

                        <div className="recover-password">
                            <p className='recover'>¿Olvidaste tu Contraseña?</p>
                        </div>

                        <Button 
                            className='button login-register-button' 
                            variant="primary" 
                            type="submit"
                            onClick={() => {
                                const mail = document.querySelector('#login-mail-input').value;
                                const password = document.querySelector('#login-password-input').value;

                                login(mail, password);
                            }}
                        >Iniciar Sesion</Button>
                    </Form>
                            
                    
                    <div className='card-footer'>
                        <p>¿No tienes Cuenta?<br></br><span className='blue-section' onClick={() => {toggleRegisterMenu()}}>Registrarse</span></p>
                    </div>

                </div>

            </Container>

        </>
    );
}

export default Login;
