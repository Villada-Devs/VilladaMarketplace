import React, { useState } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Form from 'react-bootstrap/Form';

import "../../styles/navbar/Log-Reg.css";


function Register({toggleLoginMenu, timeMessage, toggleRegisterMenu, handleCardClick}) {

    const [submited, setSubmited] = useState(false);

    return (

        <Container className="log-reg-bg" onClick={async () => { toggleRegisterMenu(); }} fluid>

            <div className='log-reg-card' onClick={handleCardClick}>

                <div className='log-reg-card-top'>
                    <h3>Registrarse</h3>
                    <CloseButton onClick={async () => { toggleRegisterMenu(); }}/>
                </div>

                <hr className='log-reg-hr register-hr'></hr>

                <Form>
                {
                    !submited? (

                        <>
                            <Row>

                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicText">
                                        <Form.Label className='input-label'>Nombre</Form.Label>
                                        <Form.Control className='input' type="text" />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicText">
                                        <Form.Label className='input-label'>Apellido</Form.Label>
                                        <Form.Control className='input' type="text" />
                                    </Form.Group>
                                </Col>

                            </Row>
                            
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label className='input-label'>Nombre de Usuario</Form.Label>
                                <Form.Control className='input' type="text" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='input-label'>Mail Institucional</Form.Label>
                                <Form.Control className='input' type="email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className='input-label'>Contraseña</Form.Label>
                                <Form.Control className='input' type="password" placeholder='8+ carácteres' />
                            </Form.Group>

                            <Button className='button login-register-button' variant="primary" type="submit">Crear Cuenta</Button>
                        </>

                    ):(

                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label className='input-label'>Código</Form.Label>
                            <Form.Control className='input' type="text" />
                            <Button className='button login-register-button' variant="primary" type="submit">Verificar</Button>
                        </Form.Group>

                    )
                }
                </Form>

                <div className='card-footer'>
                    <p>¿Ya tienes Cuenta?<br></br><span className='blue-section' onClick={() => {toggleLoginMenu()}}>Iniciar Sesion</span></p>
                </div> 

            </div>
        </Container>

    );
}

export default Register;