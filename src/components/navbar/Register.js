import React, { useContext, useState } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Form from 'react-bootstrap/Form';

import ContextConnected from '../../context/ContextConnected';

import "../../styles/navbar/Log-Reg.css";


function Register({handleCardClick}) {
    const Connected = useContext(ContextConnected)

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };

    const [submited, setSubmited] = useState(false);

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

    return (

        <Container className="log-reg-bg" onClick={async () => { toggleRegisterMenu(); }} fluid>

            <div className='log-reg-card' onClick={handleCardClick}>

                <div className='log-reg-card-top'>
                    <h3>Registrarse</h3>
                    <CloseButton onClick={async () => { toggleRegisterMenu(); }}/>
                </div>

                <hr className='log-reg-hr register-hr'></hr>

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                {
                    !submited? (

                        <>
                            <Row>

                                <Col>
                                    <Form.Group className="mb-3" controlId="FName">
                                        <Form.Label className='input-label'>Nombre</Form.Label>
                                        <Form.Control required className='input' type="text" />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group className="mb-3" controlId="LName">
                                        <Form.Label className='input-label'>Apellido</Form.Label>
                                        <Form.Control required className='input' type="text" />
                                    </Form.Group>
                                </Col>

                            </Row>
                            
                            <Form.Group className="mb-3" controlId="UserName">
                                <Form.Label className='input-label'>Nombre de Usuario</Form.Label>
                                <Form.Control required className='input' type="text" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="Email">
                                <Form.Label className='input-label'>Mail Institucional</Form.Label>
                                <Form.Control required className='input' type="email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="Password">
                                <Form.Label className='input-label'>Contraseña</Form.Label>
                                <Form.Control required className='input' type="password" placeholder='8+ carácteres' />
                            </Form.Group>

                            <Button className='button login-register-button' variant="primary" type="submit">Crear Cuenta</Button>
                        </>

                    ):(

                        <Form.Group className="mb-3" controlId="Code">
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