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
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="input-label">Mail Institucional</Form.Label>
                            <Form.Control 
                                id="login-mail-input" 
                                className="input" 
                                type="email" 
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <div className='recover-password'>
                                <Form.Label className='input-label'>Contraseña</Form.Label>
                                <p className='recover'>¿Olvidaste tu Contraseña?</p>
                            </div>
                            <Form.Control 
                                id="login-password-input" 
                                className='input' 
                                type="password" 
                                placeholder="8+ carácteres" 
                            />
                        </Form.Group>

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

/*
<div className="login-card">

    <div className="text">
        <h2>Hola De Nuevo</h2>
        <p>Que Tengas {timeMessage}!</p>
    </div>

    <div className="separator">
        <hr/>
        <p>Login</p>
        <hr/>
    </div>

    <div className="inputs">
        <input id="login-mail-input" type="text" className="input" placeholder="Mail Institucional" />
        <input id="login-password-input" type="password" className="input" placeholder="Contraseña" />
        <p className="hover text-start little">¿Olvidaste tu Contraseña?</p>
    </div>

    <hr/>

    <div className="login-button-area">
        <button type="button" className="btn btn-login" onClick={() => {
            const mail = document.querySelector('#login-mail-input').value;
            const password = document.querySelector('#login-password-input').value;

            login(mail, password);
        }}>Iniciar Sesión</button>
        <p className="little">¿No Tienes Cuenta? <span className="link hover" onClick={() => {toggleRegisterMenu()}}>Registrate Aquí</span></p>
    </div>

</div>

*/