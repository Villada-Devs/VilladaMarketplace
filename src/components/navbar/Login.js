import React, {useRef, useState, useEffect} from "react";

import CloseButton from 'react-bootstrap/CloseButton';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "../../styles/navbar/Log-Reg.css";


function Login({login, toggleLoginMenu, timeMessage, toggleRegisterMenu, handleCardClick}) {

    const mailRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        mailRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, password])

    const handleSubmit = async (e) => {
        setUser('');
        setPassword('');
    }
    
    return (

        <>

            <Container className="log-reg-bg" onClick={async () => { toggleLoginMenu(); }} fluid>

                <div className='log-reg-card' onClick={handleCardClick}>

                    <div className='log-reg-card-top'>
                        <h3>Iniciar Sesion</h3>
                        <CloseButton onClick={async () => { toggleLoginMenu(); }}/>
                    </div>
                    <hr className='log-reg-hr'></hr>

                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3 unmarging" controlId="Mail">
                            <Form.Label className="input-label">Mail</Form.Label>
                            <Form.Control 
                                className="input" 
                                id="login-mail-input" 
                                type="email" 
                                ref={mailRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value )}
                                value={user}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 unmarging" controlId="Password">
                            <Form.Label className='input-label'>Contraseña</Form.Label>
                            <Form.Control 
                                className="input" 
                                id="login-password-input" 
                                type="password"
                                onChange={(e) => setPassword(e.target.value )}
                                value={password}
                                required
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
