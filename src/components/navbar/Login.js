import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import "../../styles/Login.css";


function Login({login, toggleLoginMenu, timeMessage, toggleRegisterMenu}) {
    
    return (

        <>
            <div className="bg" onClick={() => toggleLoginMenu()}></div>

            <div className="login-card">
                <FontAwesomeIcon icon={faXmark} className="cross" onClick={async () => {
                    toggleLoginMenu();
                }} />

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
        </>
    );
}

export default Login;