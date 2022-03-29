import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Login({toggleLoginMenu, timeMessage, toggleRegisterMenu}) {
    
    return (

        <>
            <div className="bg"></div>

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
                    <input type="text" className="input" placeholder="Mail Institucional" />
                    <input type="password" className="input" placeholder="Contraseña" />
                    <p className="hover text-start little">¿Olvidaste tu Contraseña?</p>
                    <p className="hover text-start little">¿Olvidaste tu Nombre de Usuario?</p>
                </div>

                <hr/>


                <div className="login-button-area">
                    <button type="button" className="btn btn-login">Iniciar Sesión</button>
                    <p className="little">¿No Tienes Cuenta? <span className="link hover" onClick={() => {toggleRegisterMenu()}}>Registrate Aquí</span></p>
                </div>

            </div>
        </>
    );
}

export default Login;