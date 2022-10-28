import React, { useContext } from "react";

import CloseButton from 'react-bootstrap/CloseButton';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import ContextConnected from '../../context/ContextConnected';

import "../../styles/navbar/Log-Reg.css";


function Login({handleCardClick}) {

    const Connected = useContext(ContextConnected)
    console.log(Connected)

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

    const login = async (email, password) => {

        if(password !== "" && email !== "") {

            const response = await fetch("http://villadaapidjango-env.eba-vaws9zih.us-east-1.elasticbeanstalk.com/api/v1/login/", {
                method: "POST",
                body: JSON.stringify({ email: email, password: password}),
                headers: {
                "Content-Type": "application/json",
                },
            })
    
          const res = await response.json();
    
          if("statusCode" in res === false) {
            Connected.setUserInfo(res.user);
            const newToken = { access_token: res.access_token, refresh_token: res.refresh_token }
            localStorage.setItem("token", JSON.stringify(newToken));
            toggleLoginMenu();
          } else {
            alert("Wrong Credentials.");
          }   
        }
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
                            onClick={() => {
                                const mail = document.querySelector('#login-mail-input').value;
                                const password = document.querySelector('#login-password-input').value;

                                login(mail, password);
                            }}
                        >Iniciar Sesion</Button>
                    </Form>
                            
                    
                    <div className='card-footer'>
                        <p>¿No tienes Cuenta?<br /><span className='blue-section' onClick={() => {toggleRegisterMenu()}}>Registrarse</span></p>
                    </div>

                </div>

            </Container>

        </>
    );
}

export default Login;
